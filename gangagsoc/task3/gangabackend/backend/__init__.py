from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv

import os

def create_app():
    app = Flask(__name__, instance_relative_config=True)

    CORS(app, supports_credentials=True)

    # Loads default config defined in config dir
    app.config.from_object("config.default")

    # set env vars from .env file located at the root of the project
    load_dotenv()

    # Loads specific config defined in config dir
    if os.environ.get("FLASK_CONFIG_MODE", default=False):
        app.config.from_object(f"config.{os.environ.get('FLASK_CONFIG_MODE')}")
    
    # Loads config from a pyfile with location in FLASK_CONFIG_FILE var
    app.config.from_envvar("FLASK_CONFIG_FILE", silent=True)

    # Initialize app

    from . import socketio
    socketio.init_app(app)

    from . import routes
    routes.init_app(app)

    # pushing app context is important for db to work
    app.app_context().push()

    return app, socketio.socket
