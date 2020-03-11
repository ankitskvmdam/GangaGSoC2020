from . import socket

import ganga.ganga
from ganga import jobs

@socket.on('connect')
def connect():
    socket.emit('my response', {'data': 'Connected'})

@socket.on('disconnect')
def disconnect():
    print('Client disconnected')

@socket.on('status')
def status():
    socket.emit('my response', {'data': 'ok'})

@socket.on('echo')
def echo(message):
    socket.emit('my response', {'data': message['data']})


@socket.on('get job details')
def create_job(job_id):
    j = jobs(job_id)

    from ..gangatools.monitoring import monitor
    monitor(j)
    output = ''

    if j.status == 'completed':
        import os
        f = open(os.path.join(j.outputdir, "stdout"))
        output = f.read()
        f.close()

    import json
    job_details = {
        "name": j.name,
        "id": j.id,
        "application.exe": j.application.exe,
        "application.args": [arg for arg in j.application.args],
        "status": j.status,
        "output": output
    }
    job_details = json.dumps(job_details)
    socket.emit('receive job details', {
        'job_details': job_details
    })

