# Project Details

## Task 1: Ganga initial task

This task consist of two part. First part is to create a basic `Hello World` job in ganga and in second part, demonstrates splitting a job into multiple pieces.

Following extra python dependencies is used for task1:
* PyPDF2
* pdfminer.six


### Part 1
Source code for this part is in `gangagsoc/task1/hello_world_ganga.py`.
Also there is code for monitoring which is used by both part, `gangagsoc/task1/monitoring.py`.

To run part 1

```bash
gangagsoc test1-1
```
or

```bash
python gangagsoc/task1/hello_world_ganga.py
```

### Part 2
For this part there are three modules:
* **ganga_split_job**: This module perform 2 task. Split the pdf into single pages and then create the job for counting the occurance of "the" in each page.
* **count_the**: This module count the occurance of "the" in the give page. It takes page path as an argument.
* **merger**: This module adds up the number extracted from each page and places the total number into a file.

To run

```bash
gangagsoc task1-2
```
or

```bash
python gangagsoc/task1/ganga_split_job.py
```

**To run test for task1:**

```bash
gangagsoc test --task1
```

## Task3: Ganga GUI task
Frontend and backend is separated. Frontend is in `gangagsoc/task3/frontend/` and backend is in `gangagsoc/task3/gangabackend/`.

> Node (v12.13.1 or greater) and npm(v6.12.1 or greater) must be installed in you system. Installation instructions are available here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Frontend
Frontend is build using ReactJS(UI), React Router(managing navigation), Redux(managing state), Scss(Stylesheet), Webpack(module bunlder), Node (javascript runtime).

More instruction about building frontend is available at [gangagsoc/task3/frontend/README.md](https://github.com/ankitskvmdam/GangaGSoC2020/blob/master/gangagsoc/task3/frontend/README.md)

### Backend

Following extra python dependencies is used for task3:
* flask
* flask-socketio
* python-dotenv
* flask-cors
* gunicorn
* eventlet

More details is available at [gangagsoc/task3/gangabackend/README.md](https://github.com/ankitskvmdam/GangaGSoC2020/blob/master/gangagsoc/task3/gangabackend/README.md)

### Run
To run

```bash
gangagsoc task3
```
Once build process is complete server will automatically starts. Visit http://localhost:8080 