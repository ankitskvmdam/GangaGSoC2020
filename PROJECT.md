# Project Details

To run first update/install all the dependencies. 
I have used following extra python dependencies:
* PyPDF2
* pdfminer.six
* flask
* flask-socket-io

## Task 1: Ganga initial task

This task consist of two part. In the first part I have to create a basic `Hello World` job in ganga and in second part I have to create a job that demonstrates splitting a job into multiple pieces.

### Part 1
Source code of this part is in `gangagsoc/task1/hello_world_ganga.py`.
Also there is code for monitoring which is used by both part, `gangagsoc/task1/monitoring.py`
Test code is in `test/TestTask1Part1.py`.

To run part 1

```bash
python gangagsoc/task1/hello_world_ganga.py
```

To run test for part 1:

```bash
python -m unittest discover test "TestTask1Part1.py"
```

### Part 2
For this part I have created three modules:
* **ganga_split_job**: This module perform 2 task. Split the pdf into single pages, Create the job for counting the occurance of "the" in each page.
* **count_the**: This module count the occurance of "the" in the give page.
* **merger**: This module adds up the number extracted from each page and places the total number into a file.

To run

```bash
python gangagsoc/task1/ganga_split_job.py
```

To run test for part 2:

```bash
python -m unittest discover test "TestTask1Part2.py"
```

**To run test for task1:**

```bash
python -m unittest discover test "TestTask1Part*.py"
```

## Task3: Ganga GUI task
