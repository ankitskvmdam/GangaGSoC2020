import os
def mergefiles(file_list ,output_file):

    f_out = open(output_file,'w')
    count = 0
    for f in file_list:
        f_in = open(f)
        count = count + int(f_in.read())
        f_in.close()

    f_out.write(count)
    f_out.flush()
    f_out.close()
    return True