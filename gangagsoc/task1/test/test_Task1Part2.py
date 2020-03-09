import unittest
import copy


class TestTask1(unittest.TestCase):
    
    def test_ganga_split_job(self):
            from gangagsoc.task1.ganga_split_job import run
            from gangagsoc.task1.monitoring import run_until_state

            # running job
            j = run()

            # wait for job to complete
            state = run_until_state(j, state = 'completed', break_states=['new', 'killed', 'failed', 'unknown', 'removed'])

            # check job completed successfully or not
            self.assertEqual(state, True)

            # check total number of subjobs. It should be equal to 12.
            self.assertEqual(len(j.subjobs), 12)

            # check total number of input files. It should be equal to 13.
            self.assertEqual(len(j.inputfiles), 13)

            # check total number of arguments. It should be equal to 12.
            self.assertEqual(len(j.splitter.args), 12)

            # check 'the' count. It should be equal to 350
            import os
            f = open(os.path.join(j.outputdir, "stdout"), "r")
            count = int(f.read())
            self.assertEqual(count, 350)

if __name__ == '__main__':
    unittest.main()