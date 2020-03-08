from flask_socketio import SocketIO, emit

socket = SocketIO()

from .job import connect, disconnect, create_job

def init_app(app):
    socket.init_app(app, cors_allowed_origins="*")