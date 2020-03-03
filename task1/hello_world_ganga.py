import ganga.ganga
from ganga import Job, Executable, Local, jobs


def hello_world_ganga():
    """ 
        This function will create a hello world job Ganga job that executes on Local backend
    """
    j = Job()
    j.name = "Hello World Job"

    """
        j.application = Executable()        # By default application is Executable.
        j.backend = Local()                 # By default application executes on Local backend
    """

    j.submit()
    print(j.status)
    print(jobs)

hello_world_ganga()