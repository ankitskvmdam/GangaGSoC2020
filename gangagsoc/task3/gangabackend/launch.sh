#!/bin/bash

gunicorn --worker-class eventlet run:app -p compose.pid -b ${FLASK_HOST:-0.0.0.0}:${FLASK_PORT:-9991} 