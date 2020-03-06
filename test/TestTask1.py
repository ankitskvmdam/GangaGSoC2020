import unittest
import copy


class TestTask1(unittest.TestCase):

    def test_hello_world(self):
        from gangagsoc.task1.hello_world_ganga import hello_world_ganga
        from ganga import Executable, Localhost

        # creating hello world job
        j = hello_world_ganga()

        # Checking whether job submitted or not
        self.assertEqual(j.status, 'submitted')

        # Check job backend
        self.assertEqual(type(j.backend), Localhost)

        # Check job is executable
        self.assertEqual(type(j.application), Executable)

if __name__ == '__main__':
    unittest.main()
