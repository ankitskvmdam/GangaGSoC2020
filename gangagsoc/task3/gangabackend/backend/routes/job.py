from flask import Blueprint, request, jsonify, abort, make_response, current_app
from http import HTTPStatus
import sys

# Ganga import
import ganga.ganga
from ganga import Job

job_bp = Blueprint("job", __name__, url_prefix="/api/v1/job")

@job_bp.route("/", methods=["GET"])
def get_job():
    return jsonify({"message":"ok"})

@job_bp.route('/new/submit', methods=["POST"])
def submit_job():
    from gangagsoc.task3.gangabackend.backend.gangatools.jobs import create_job
    status, job_id = create_job(request.json)

    if status == 'submitted':
        response = make_response(jsonify({"message": "JOB_SUBMITTED_SUCCESSFULLY", "code": "S01", "job_id": job_id}), HTTPStatus.OK)
        return response

    else:
        response = make_response(jsonify({"message": "JOB_NOT_SUBMITTED", "code": "E01"}), HTTPStatus.BAD_REQUEST)
        return response
