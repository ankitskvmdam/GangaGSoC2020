import pytest
from .. import backend
import os

@pytest.fixture(scope="session")
def client():
    """
    This fixture will create an app instance, setup test db connection and create all tables.
    At the end of tests, connection to test db is closed and all tables are dropped.
    This app instance and db connection is used for the entire test.
    """
    os.environ.putenv("FLASK_CONFIG_MODE", "testing")
    app, _ = backend.create_app()
    app.app_context().push()
    client = app.test_client()
    yield client

@pytest.fixture(scope="session")
def socket_client():
    """
    This fixture will create an app instance, setup test db connection and create all tables.
    At the end of tests, connection to test db is closed and all tables are dropped.
    This app instance and db connection is used for the entire test.
    """
    os.environ.putenv("FLASK_CONFIG_MODE", "testing")
    app, socket = backend.create_app()
    app.app_context().push()
    socket_client = sokcet.test_client(app)
    yield socket_client