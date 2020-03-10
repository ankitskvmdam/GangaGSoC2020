#!/usr/bin/env python

import os
import sys
from http import HTTPStatus

server_name = "Ganga Fronend Server"

try:
    urlparser = __import__("urlparse")
except:
	urlparser = __import__("urllib.parse")
	globals()["urlparse"] = urlparser.parse
else:
    globals()["urlparse"] = urlparser

try:
    httpserver = __import__("SimpleHTTPServer")
    base = __import__("BaseHTTPServer")
except:
	httpserver = __import__("http.server")
	globals()["SimpleHTTPServer"] = httpserver.server
	globals()["BaseHTTPServer"] = httpserver.server
else:
    globals()["SimpleHTTPServer"] = httpserver
    globals()["BaseHTTPServer"] = base

class Handler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def do_GET(self):
        urlparts = urlparse.urlparse(self.path)
        request_file_path = urlparts.path.strip('/')

        if not os.path.exists(request_file_path):
            self.path = 'index.html'

        return SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)
    
    def log_message(self, format, *args):
        if isinstance(args[0], HTTPStatus):
            print("{}: HTTPStatus - Code {} Name: {}".format(args[0].value, args[0].name))
        else:
            print("{}: {}".format(server_name, " ".join(args)))



host = 'localhost'
try:
    port = int(sys.argv[1])
except IndexError:
    port = 8080

try:
    httpd = BaseHTTPServer.HTTPServer((host, port), Handler)

    print ("{} started at port: {}...".format(server_name, port))
    httpd.serve_forever()

except KeyboardInterrupt:
    print("\n{} is shutting down...".format(server_name))
    httpd.socket.close()