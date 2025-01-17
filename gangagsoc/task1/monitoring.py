from GangaCore.GPIDev.Base.Proxy import proxy_wrap
import time
from datetime import datetime, timedelta

@proxy_wrap
def run_until_state(j, state, timeout=60, break_states=None, sleep_period=0.5):
    
    if break_states is None:
        break_states = []

    backend = type(j.backend)

    end_time = datetime.utcnow() + timedelta(seconds=timeout)

    while j.status != state and datetime.utcnow() < end_time:
        backend.master_updateMonitoringInformation([j])
        print('Job: {} state: {}'.format(j.id, j.status))
        if j.status in break_states:
            print('Job failed due to "{}"'.format(j.status))
            return False
        time.sleep(sleep_period)
    return j.status == state
