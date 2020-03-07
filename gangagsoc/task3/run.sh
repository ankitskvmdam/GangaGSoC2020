#!/bin/bash

cd frontend
if [ ! -d "./node_modules" ]; then
  npm install
fi
if [ ! -d "./dist" ]; then
  npm run build
fi