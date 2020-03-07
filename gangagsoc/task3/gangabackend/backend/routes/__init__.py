from .job import job_bp
from .status import status_bp

def init_app(app):
    app.register_blueprint(job_bp)
    app.register_blueprint(status_bp)
