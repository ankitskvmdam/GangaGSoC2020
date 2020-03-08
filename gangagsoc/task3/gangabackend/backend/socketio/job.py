from . import socket

import ganga.ganga
from ganga import Job

@socket.on('connect')
def connect():
    socket.emit('my response', {'data': 'Connected'})

@socket.on('disconnect')
def disconnect():
    print('Client disconnected')

@socket.on('create job')
def create_job(details):
    import json
    details_json = json.dumps(details)
    j = Job()
    j.submit()
    socket.emit('create job status', j.status)

