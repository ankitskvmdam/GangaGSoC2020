from . import frontend
from . import gangabackend
import os

def build_frontend():
    from plumbum import local
    frontend_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "frontend")
    os.chdir(frontend_path)

    npm = local['npm']

    print('Installing dependencies.')
    print('Command running: npm install')
    print('Please wait...')
    
    # > npm install
    npm('install')

    print('Installation completed!')

    print('Building frontend')
    print('Command running: npm run build')
    print('Please wait...')
    
    # > npm run build
    npm('run', 'build')
    
    print('Completed!')

# Build frontend and backend
def run_task():
    import subprocess
    import threading
    

    frontend_dist_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "frontend", "dist")
    backend_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "gangabackend")
 
    build_frontend()
    print('Starting server, Please wait..')
    os.chdir(frontend_dist_path)
    proc1 = subprocess.Popen(["python", "server.py"],
                            stderr=subprocess.STDOUT)
                            
    t1 = threading.Thread(target=proc1.communicate, args=(proc1,))
    t1.start()

    os.chdir(backend_path)
    proc2 = subprocess.Popen(["python", "run.py"],
                            stderr=subprocess.STDOUT)

    t2 = threading.Thread(target=proc2.communicate, args=(proc2,))
    t2.start()
    
    t1.join()
    t2.join()


# run test
def run_test():
    import pytest
    import os
    test_folder_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "gangabackend")
    pytest.main(['-x', f"{test_folder_path}"])