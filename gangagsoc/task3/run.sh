#!/bin/bash

cd frontend
if [ ! -d "./node_modules" ]; then
  npm install
fi
if [ ! -d "./dist" ]; then
  npm run build
fi

cd ../backend
if [ -x "$(command -v pip3)" ]; then # if pip3 executable exists in PATH
  pip3 install --editable .
else
  pip install --editable .
fi

export FLASK_APP=backend
export FLASK_DEBUG=true
flask run