from GangaCore.GPIDev.Base.Proxy import proxy_wrap
import time
from datetime import datetime, timedelta

@proxy_wrap
def monitor(j, timeout=60, sleep_period=0.5):
    break_states = ['new', 'killed', 'failed', 'unknown', 'removed']
    state = 'completed'

    backend = type(j.backend)

    end_time = datetime.utcnow() + timedelta(seconds=timeout)

    while j.status != state and datetime.utcnow() < end_time:
        backend.master_updateMonitoringInformation([j])
        if j.status in break_states:
            print('Job failed due to "{}"'.format(j.status))
            return False
        time.sleep(sleep_period)
    return j.status
