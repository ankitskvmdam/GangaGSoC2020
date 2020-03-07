from flask import Blueprint, request, jsonify, abort, make_response, current_app
from http import HTTPStatus
import sys

job_bp = Blueprint("job", __name__, url_prefix="/api/v1/job")

@job_bp.route("/", methods=["GET"])
def get_job():
    return jsonify({"message":"ok"})