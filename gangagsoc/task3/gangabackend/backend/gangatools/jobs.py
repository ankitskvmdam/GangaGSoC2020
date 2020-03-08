import ganga.ganga
from ganga import Job

# Create job
def create_job(details):
    j = Job( name = details['name'])
    j.submit()
    return j.status, j.id