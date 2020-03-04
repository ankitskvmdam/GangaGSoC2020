import ganga.ganga
from ganga import Job, ArgSplitter, LocalFile, CustomMerger

from PyPDF2 import PdfFileReader, PdfFileWriter
import os
import shutil
import json
import re

count_the_filename = "count_the.py"

# Move target files
def move_target_files(src_path, src_file_exp, dest):
    source = os.listdir(src_path)
    for f in source:
        if re.search(src_file_exp, f):
            shutil.move(f, os.path.join(dest, f))



# Split the pdf into single pages
def split_pdf_files(pdf_file_path):
    pdf = PdfFileReader(pdf_file_path)
    pdf_info = dict()

    path_list = pdf_file_path.split(os.path.sep)
    filename = path_list[-1]
    filename = filename.split('.')[0]
    directory_containing_pdf = "."

    if len(path_list) != 1:
        directory_containing_pdf = os.path.join(*path_list[:-1])

    # Creating a directory where pages where store after splitting
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
    
    pdf_info["pages"] = page_filenames

    json_data = json.dumps(pdf_info)
    
    with open('split_info.json', 'w') as j:
        j.write(json_data)


    processed_pdf_file_location = os.path.join(directory_containing_pdf, "pdf_pages")
    # copying the pdf pages to pdf_pages directory 
    move_target_files(".", r"{}_page.*".format(filename), processed_pdf_file_location)
    os.replace("split_info.json", os.path.join(processed_pdf_file_location, "split_info.json"))

    return processed_pdf_file_location

# Generate list of files that are given to ganga
def get_input_files(processed_pdf_file_location):
    files = [count_the_filename, "merger.py"]
    split_info_location = os.path.join(processed_pdf_file_location, "split_info.json")

    # opening split_info.json
    with open(split_info_location, "r") as j:
        data = json.load(j)
        length = data["total_page"]
        for filename in data["pages"]:
            file_location = os.path.join(processed_pdf_file_location,filename)
            files.append(LocalFile(file_location))

    return files

# Generate list of arguments which is used by ArgSplitter
def get_arguments(processed_pdf_file_location):
    args = list()
    split_info_location = os.path.join(processed_pdf_file_location, "split_info.json")

    # opening split_info.json
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
    j.splitter = ArgSplitter(args = get_arguments('./pdf_pages'))
    j.inputfiles = get_input_files('./pdf_pages')

    merger_file_location = os.path.join(os.getcwd(), "merger.py")
    j.postprocessors.append(CustomMerger(files = ['stdout'], module = merger_file_location))
    
    j.submit()

# Run
def run():
    split_pdf_files("CERN.pdf")
    create_job()

run()
