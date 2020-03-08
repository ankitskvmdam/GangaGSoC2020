from flask_socketio import SocketIO, emit

socket = SocketIO()

from .status import connect, disconnect, status, echo

def init_app(app):
    socket.init_app(app, cors_allowed_origins="*")