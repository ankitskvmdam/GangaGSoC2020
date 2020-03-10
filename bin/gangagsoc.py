import click
from gangagsoc.task1 import run_task_part_1, run_task_part_2, run_test as run_test1
from gangagsoc.task3 import run_task as run_task3, run_test as run_test3

@click.group()
def cli():
    pass

@cli.command(help='Run task 1 Part 1: Hello world task')
def task1_1():
    run_task_part_1()

@cli.command(help='Run task 1 Part 2: Ganga split job')
def task1_2():
    run_task_part_2()


@cli.command(help='Run task 3: Ganga GUI task')
def task3():
        run_task3()

@cli.command(help='Run test, if no flag given then both task test will run')
@click.option('--task1', is_flag=True, default=False, help='Run tests for task 1')
@click.option('--task3', is_flag=True, default=False, help='Run tests for task 3')
def test(task1, task3):
    if task1:
        run_test1()

    elif task3:
        run_test3()

    else:
        run_test1()
        run_test3()

