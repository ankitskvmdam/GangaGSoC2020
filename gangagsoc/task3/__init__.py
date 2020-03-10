from . import frontend
from . import gangabackend
import os

def output_reader(proc):
    for line in iter(proc.stdout.readline, b''):
        print('INFO: {0}'.format(line.decode('utf-8')), end='')

def run_task():
    import subprocess
    import threading

    frontend_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "frontend")
    frontend_dist_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "frontend", "dist")
    backend_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "gangabackend")

    os.chdir(frontend_path)

    proc1 = subprocess.Popen(["npm", "install"],
                            stdout=subprocess.PIPE,
                            stderr=subprocess.STDOUT)
    
    t1 = threading.Thread(target=output_reader, args=(proc1,))
    t1.start()
    t1.join()
    proc1.wait()

    proc2 = subprocess.Popen(["npm", "run", "build"],
                            stdout=subprocess.PIPE,
                            stderr=subprocess.STDOUT)

    t2 = threading.Thread(target=output_reader, args=(proc2,))
    t2.start()
    t2.join()
    proc2.wait()

    os.chdir(frontend_dist_path)
    proc3 = subprocess.Popen(["python", "server.py"],
                            stdout=subprocess.PIPE,
                            stderr=subprocess.STDOUT)
                            
    t3 = threading.Thread(target=output_reader, args=(proc3,))
    t3.start()

    os.chdir(backend_path)
    proc4 = subprocess.Popen(["python", "run.py"],
                            stdout=subprocess.PIPE,
                            stderr=subprocess.STDOUT)

    t4 = threading.Thread(target=output_reader, args=(proc4,))
    t4.start()
    
    t3.join()
    t4.join()


def run_test():
    import pytest
    import os
    test_folder_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "gangabackend")
    pytest.main(['-x', f"{test_folder_path}"])