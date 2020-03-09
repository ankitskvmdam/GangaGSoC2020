import click
from gangagsoc.task1 import run_task_part_1, run_task_part_2, run_test as run_test1
from gangagsoc.task3 import run_task as run_task3, run_test as run_test3

@click.group()
def cli():
    pass

@cli.command(help='Run task 1 Part 1: Hello world task')
@click.option('--test', is_flag=True, default=False, help='Run tests for task 1')
def task1_1(test):
    if test:
        run_test1()
    else:
        run_task_part_1()

@cli.command(help='Run task 1 Part 2: Ganga split job')
@click.option('--test', is_flag=True, default=False, help='Run tests for task 1')
def task1_2(test):
    if test:
        run_test1()
    else:
        run_task_part_2()


@cli.command(help='Run task 3: Ganga GUI task')
@click.option('--test', is_flag=True, default=False, help='Run tests for task 3')
def task3(test):
    if test:
        run_test3()
    else:
        run_task3()



