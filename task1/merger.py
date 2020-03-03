import os
def merge(file_list,output_file):
    print(file_list, output_file)

    f_out = open(output_file,'w')
    for f in file_list:
        f_in = open(f)
        f_out.write(f_in.read())
        f_in.close()
    f_out.flush()
    f_out.close()