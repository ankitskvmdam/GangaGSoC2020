from .ganga_split_job import run, monitor_job

def run_task():
    j = run()
    monitor_job(j)

def run_test():
    import pytest
    import os
    test_folder_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "test")
    pytest.main(['-x', f"{test_folder_path}"])