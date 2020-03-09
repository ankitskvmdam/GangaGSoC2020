from .ganga_split_job import run, monitor_job
from .hello_world_ganga import run_hello_world_ganga_with_output

def run_task_part_2():
    j = run()
    monitor_job(j)

def run_task_part_1():
    run_hello_world_ganga_with_output()

def run_test():
    import pytest
    import os
    test_folder_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "test")
    pytest.main(['-x', f"{test_folder_path}"])