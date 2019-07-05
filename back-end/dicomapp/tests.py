from django.test import TestCase

# Create your tests here.

# Test to check if the home page opens
class ProjectTests(TestCase):

    def test_homepage(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
		
		
		
class UsersModelTest(TestCase):

    def test_string_representation(self):
        self.fail("TODO Test incomplete")
