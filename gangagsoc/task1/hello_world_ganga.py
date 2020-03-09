import ganga.ganga
from ganga import Job, Executable, Local, jobs
from gangagsoc.task1.monitoring import run_until_state

import os

# This function will create a hello world job Ganga job that executes on Local backend
def hello_world_ganga():
    j = Job()
    j.name = "Hello World Job"
    j.submit()

    return j

# Print output
def run_hello_world_ganga_with_output():
    j = hello_world_ganga()
    status = run_until_state(j, state = 'completed', break_states=['new', 'killed', 'failed', 'unknown', 'removed'])

    if status == True:
        f = open(os.path.join(j.outputdir, "stdout"))
        print("******************")
        print("    Output")
        print("******************")
        print(f.read())
        print("\n\n\n******END********\n\n\n")

    else:
        print(j.status)


if __name__ == '__main__':
    run_hello_world_ganga_with_output()