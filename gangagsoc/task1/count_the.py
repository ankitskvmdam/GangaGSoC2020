from pdfminer.high_level import extract_text
import re
import sys

# count the from pdf page and return total count
def count_the(path_of_pdf):
    pdf_content = extract_text(path_of_pdf)
    words = pdf_content.split()
    count = 0

    for word in words:
        if re.search('^[tT][hH][eE]$', word):
            count = count + 1

    print(count)
    return count

argv = sys.argv
count_the(argv[1])