
def test_get_job(client):
    resp = client.get(
        "/api/v1/job/"
    )
    assert resp.status_code == 200