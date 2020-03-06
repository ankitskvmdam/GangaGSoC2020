import ganga.ganga
from ganga import Job, ArgSplitter, LocalFile, CustomMerger
from gangagsoc.task1.monitoring import run_until_state
from PyPDF2 import PdfFileReader, PdfFileWriter

import os
import shutil
import json
import re
import inspect

# Return absolute path of the file. (relative path must be give)
def get_abs_path(file):
    path = os.path
    current_directory = path.dirname(path.realpath(__file__))
    file_path = path.realpath(path.join(current_directory, file))
    return file_path

count_the_filename = "count_the.py"
pdf_file_location = get_abs_path(os.path.join('..', '..', 'CERN.pdf'))
merger_file_location = get_abs_path("merger.py")
count_the_file_location = get_abs_path("count_the.py")

# store the location of directory containing the split pages of pdf.
processed_pdf_file_location = "" 

# Move target files
def move_target_files(src_path, src_file_exp, dest):
    source = os.listdir(src_path)
    for f in source:
        if re.search(src_file_exp, f):
            shutil.move(f, os.path.join(dest, f))



# Split the pdf into single pages
def split_pdf_files(pdf_file_path):
    global processed_pdf_file_location
    pdf = PdfFileReader(pdf_file_path)
    pdf_info = dict()

    path_list = pdf_file_path.split(os.path.sep)
    filename = path_list[-1].split('.')[0]
    directory_containing_pdf = "."

    if len(path_list) != 1:
        directory_containing_pdf = os.path.join(os.path.sep,*path_list[:-1])

    # Creating a directory where pages will store after splitting
    os.makedirs(os.path.join(directory_containing_pdf, "pdf_pages"), exist_ok=True)

    total_page = pdf.getNumPages()
    pdf_info["total_page"] = total_page
    
    page_filenames = []

    for page in range(total_page):
        pdf_writer = PdfFileWriter()
        pdf_writer.addPage(pdf.getPage(page))

        output_pdf_file_name = "{}_page_{}.pdf".format(filename, page + 1 )
        page_filenames.append(output_pdf_file_name)

        with open(output_pdf_file_name, 'wb') as out:
            pdf_writer.write(out)

        out.close()
    
    processed_pdf_file_location = os.path.join(directory_containing_pdf, "pdf_pages")

    # storing information of splitting into json file.
    # we will use this information in later process.
    split_info_file = os.path.join(processed_pdf_file_location, "split_info.json")
    
    pdf_info["pages"] = page_filenames
    json_data = json.dumps(pdf_info)
    with open(split_info_file, 'w') as j:
        j.write(json_data)

    # copying the pdf pages to pdf_pages directory 
    move_target_files(".", r"{}_page.*".format(filename), processed_pdf_file_location)

    return processed_pdf_file_location

# Returns the list of files which will be given to ganga.
def get_input_files():
    files = [count_the_file_location]
    split_info_location = os.path.join(processed_pdf_file_location, "split_info.json")
    with open(split_info_location, "r") as j:
        data = json.load(j)
        length = data["total_page"]
        for filename in data["pages"]:
            file_location = os.path.join(processed_pdf_file_location,filename)
            files.append(LocalFile(file_location))
    return files

# Returns the list of arguments used by ganga to process splitting pdf.
def get_arguments():
    args = list()
    split_info_location = os.path.join(processed_pdf_file_location, "split_info.json")

    with open(split_info_location, "r") as j:
        data = json.load(j)
        length = data["total_page"]
        for filename in data["pages"]:
            args.append([count_the_filename, filename])
    return args

# Create ganaga job
def create_job():
    j = Job()
    j.name = "Count The"
    j.application.exe = "python"
    j.application.args = ""
    j.splitter = ArgSplitter(args = get_arguments())
    j.inputfiles = get_input_files()
    j.postprocessors.append(CustomMerger(files = ['stdout'], module = merger_file_location))
    j.submit()
    return j

# Monitor job
def monitor_job(j):
    status = run_until_state(j, state = 'completed', break_states=['new', 'killed', 'failed', 'unknown', 'removed'])
    if status == True:
        f = open(os.path.join(j.outputdir, "stdout"))
        print("******************")
        print("    Output")
        print("******************\n\nCount\n----------")
        print(f.read())
        print("\n\n\n******END********\n\n\n")

    else:
        print(j.status)

# Run
def run():
    split_pdf_files(pdf_file_location)
    j = create_job()
    monitor_job(j)

if __name__ == "__main__":
    run()
