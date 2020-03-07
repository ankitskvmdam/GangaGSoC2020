from . import socket

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
