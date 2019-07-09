from django.test import TestCase
from rest_framework import status


# Create your tests here.
class APITestCase(TestCase):

    def testTestFramework(self):
        self.assertTrue(True)

    URL = "http://localhost:8000/api/getmap/?municipality=Acrelândia&country=Brazil&caseType=sameMuni&yearMonth=2019-01"
    def testGetMapStatusCode(self):
        response = self.client.get(self.URL, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testGetMapJsonExists(self):
        response = self.client.get(self.URL, format='json')
        self.assertTrue(response.json())

    def testGetMapExpectedResponse(self):
        url = "http://localhost:8000/api/getmap/?municipality=Acrelândia&country=Brazil&caseType=sameMuni&yearMonth=2019-01"
        response = self.client.get(url, format='json')
        data = response.json()

        self.assertEqual(data['Country'], "Brazil")
        self.assertEqual(data['State'], "Acre")
        self.assertEqual(data['Municipality'], "Acrelândia")
        self.assertEqual(data['count'], 23)
