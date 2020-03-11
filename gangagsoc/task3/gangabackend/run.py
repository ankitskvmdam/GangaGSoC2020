import os
import ganga.ganga
from backend import create_app

app, socket = create_app()

if __name__ == "__main__":
    socket.run(
        app,
        host=os.environ.get("FLASK_HOST", "127.0.0.1"),
        port=os.environ.get("FLASK_PORT", "9991"),
        debug=True
    )
