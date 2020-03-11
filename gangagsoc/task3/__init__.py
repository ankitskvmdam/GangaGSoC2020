from . import frontend
from . import gangabackend
import os

frontend_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "frontend")
frontend_dist_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "frontend", "dist")
backend_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "gangabackend")
test_folder_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "gangabackend")

def build_frontend():
    from plumbum import local
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
 
    build_frontend()
    print('Starting Frontend and backend server, Please wait..')

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
    import subprocess
    import threading

    os.chdir(backend_path)
    print('\nGanga Backend tests are running')
    pytest.main(['-x', f"{test_folder_path}"])

    os.chdir(frontend_path)
    print('\nGanga GUI tests are running...')

    print('First we have to build front_end (if you run this for the first time then it will took time, it depends on your internet speed)')
    build_frontend()
    os.system('npm run test:unit')
    
    print('\n\n\nTo run integration test we need to run servers..\n\n\n')
    
    print('Starting Frontend and backend server, Please wait..')

    proc1 = subprocess.Popen(["npm", "run", "test:integration"],
                            stderr=subprocess.STDOUT)
                            
    t1 = threading.Thread(target=proc1.communicate, args=(proc1,))
    t1.start()

    os.chdir(frontend_dist_path)
    proc2 = subprocess.Popen(["python", "server.py"],
                            stderr=subprocess.STDOUT)
                            
    t2 = threading.Thread(target=proc2.communicate, args=(proc2,))
    t2.start()

    os.chdir(backend_path)
    proc3 = subprocess.Popen(["python", "run.py"],
                            stderr=subprocess.STDOUT)

    t3 = threading.Thread(target=proc3.communicate, args=(proc3,))
    t3.start()
    
    t1.join()
    t2.join()
    t3.join()
