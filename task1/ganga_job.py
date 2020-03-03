# import ganga.ganga
# from ganga import Job, ArgSplitter, LocalFile

from PyPDF2 import PdfFileReader, PdfFileWriter
import os
import json

count_the_filename = "count_the.py"

def split_pdf_files(pdf_file_path):
    pdf = PdfFileReader(pdf_file_path)
    pdf_info = dict()

    path_list = pdf_file_path.split('/')
    filename = path_list[-1]
    filename = filename.split('.')[0]
    directory_containing_pdf = "/".join(path_list[:-1])

    if directory_containing_pdf == "":
        directory_containing_pdf = "."

    # Creating a directory where pages where store after splitting
    os.system("mkdir -p {}/pdf_pages".format(directory_containing_pdf))
    
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


    processed_pdf_file_location ="{}/pdf_pages/".format(directory_containing_pdf) 
    # copying the pdf pages to pdf_pages directory 
    os.system("mv {}_page_* {}".format(filename, processed_pdf_file_location))
    os.system("mv split_info.json {}".format(processed_pdf_file_location))

    return processed_pdf_file_location

def get_input_files(processed_pdf_file_location):
    files = list()
    split_info_location = "{}/{}".format(processed_pdf_file_location,"split_info.json")

    # opening split_info.json
    with open(split_info_location, "r") as j:
        data = json.load(j)
        length = data["total_page"]
        for filename in data["pages"]:
            file_location = "{}/{}".format(processed_pdf_file_location,filename)
            files.append(LocalFile(filename))

    return files

def get_arguments(processed_pdf_file_location):
    args = list()
    split_info_location = "{}/{}".format(processed_pdf_file_location,"split_info.json")

    # opening split_info.json
    with open(split_info_location, "r") as j:
        data = json.load(j)
        length = data["total_page"]
        for filename in data["pages"]:
            file_location = "{}/{}".format(processed_pdf_file_location,filename)
            args.append([count_the_filename, filename])

    print(args)
    return args

def create_job():
    inputfiles = get_input_files()
    j = Job()
    j.name = "Count The"

# processed_pdf_location = split_pdf_files("CERN.pdf")

# print(processed_pdf_location)

# files = get_input_files("./pdf_pages")
args = get_arguments("./pdf_pages")

# print(files, args)


