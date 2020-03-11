# Project Details

## Getting Started

### Requirements
- python3
- node (v12.13.1)
- npm (v6.12.1)

### Clone this repo
```bash
git clone https://github.com/ankitskvmdam/GangaGSoC2020.git
```

### Create a python virtual environment

```bash
python -m venv venv     # create python environment
. ./venv/bin/activate    # activate python enviroment
```

### Pip install gangagsoc

```bash
cd GangaGSoC2020
pip install -e .
```


### Use gangagsoc cli to run tasks and tests

```bash

# for help
gangagsoc --help
gangagsoc test --help
gangagsoc task3 --help

#run task 1-1
gangagsoc task1-1

#run task 1-2
gangagsoc task1-2

#run task 3
# Once debugger output of the flask developer server is visible in the terminal
# visit http://localhost:8080 
gangagsoc task3


#run test
gangagsoc test --task1  # test for task1

gangagsoc test --task3  # test for task3
# Once backend and frontend unit test complete, Cypress window pop up.
# Choose run all spec to run all the tests. Once every test is completed then you can close the window.

# for headless test (without browser) (task3)
gangagsoc test --task3 --headless
```

## Task 1: Ganga initial task

This task consists of two parts. First part is to create a basic `Hello World` job in ganga and in second part, demonstrate splitting a job into multiple pieces.

### Part 1
Source code for this part is in `gangagsoc/task1/hello_world_ganga.py`.
Also there is code for monitoring which is used by both part, `gangagsoc/task1/monitoring.py`.

### Part 2
This part has three modules:
* **ganga_split_job**: This module performs 2 tasks. Split the pdf into single pages and then create the job for counting the occurance of "the" in each page.
* **count_the**: This module counts the occurance of "the" in the given page. It takes page path as an argument.
* **merger**: This module adds up the number extracted from each page and output the total number into stdout.

## Task3: Ganga GUI task
Frontend and backend is separated. Frontend is in `gangagsoc/task3/frontend/` and backend is in `gangagsoc/task3/gangabackend/`.

### Frontend
Frontend is built using ReactJS(UI), React Router(managing navigation), Redux(managing state), Scss(Stylesheet), Webpack(module bundler) and Node (javascript runtime).

Instructions on manually building frontend is available at [gangagsoc/task3/frontend/README.md](https://github.com/ankitskvmdam/GangaGSoC2020/blob/master/gangagsoc/task3/frontend/README.md)

### Backend
Backend is built using flask web framework and websockets are handled by flask-soketio

Instructions on manually running is available at [gangagsoc/task3/gangabackend/README.md](https://github.com/ankitskvmdam/GangaGSoC2020/blob/master/gangagsoc/task3/gangabackend/README.md)
