from django.test import TestCase
from rest_framework import status
from .municipalityproperties import CaseType, MunicipalityProperty, MUNICIPALITIES_AMAZONAS


# Create your tests here.
class APITestCase(TestCase):

    def testTestFramework(self):
        self.assertTrue(True)

    URL = "http://localhost:8000/api/getmap/?caseType=sameMuni&yearMonth=2019-01"
    def testGetMapStatusCode(self):
        response = self.client.get(self.URL, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def testGetMapJsonExists(self):
        response = self.client.get(self.URL, format='json')
        self.assertTrue(response.json())

    #BDD Test
    def testGetMapArrayResponse(self):
        response = self.client.get(self.URL, format='json')
        data = response.json()
        self.assertEqual(len(data), 62)

    #BDD Test
    def testGetMapResponseOtherMuni(self):
        url = "http://localhost:8000/api/getmap/?caseType=otherMuni&yearMonth=2019-01"
        response = self.client.get(url, format='json')
        data = response.json()
        self.assertEqual(len(data), 62)

    #BDD Test
    def testGetMapResponseOtherState(self):
        url = "http://localhost:8000/api/getmap/?caseType=otherState&yearMonth=2019-01"
        response = self.client.get(url, format='json')
        data = response.json()
        self.assertEqual(len(data), 62)

    #BDD Test
    def testGetMapResponseOtherCountry(self):
        url = "http://localhost:8000/api/getmap/?caseType=otherCountry&yearMonth=2019-01"
        response = self.client.get(url, format='json')
        data = response.json()
        self.assertEqual(len(data), 62)

    #BDD Test
    def testGetMapResponseInvalidCase(self):
        url = "http://localhost:8000/api/getmap/?caseType=Invalid&yearMonth=2019-01"
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


    #Unit Tests for BDD testGetMapArrayResponse
    def testCaseTypeExists(self):
        self.assertTrue(CaseType.sameMuni)

    def testMunicipalityPropertyExists(self):
        self.assertTrue(MunicipalityProperty("Name", 0, 0, 0, 0))

    def testMunicipalityGetProperties(self):
        mun = MunicipalityProperty("Name", 0, 1, 2, 3)
        properties = mun.getProperties(CaseType.sameMuni)
        self.assertTrue(type(properties), dict)

    def testMunicipalityFieldsExist(self):
        mun = MunicipalityProperty("Name", 0, 1, 2, 3)
        properties = mun.getProperties(CaseType.sameMuni)
        self.assertTrue(properties['Country'] != None)
        self.assertTrue(properties['State'] != None)
        self.assertTrue(properties['Municipality'] != None)
        self.assertTrue(properties['count'] != None)

    def testMunicipalityPropertyName(self):
        testName = "Test Name"
        mun = MunicipalityProperty(testName, 0, 1, 2, 3)
        properties = mun.getProperties(CaseType.sameMuni)
        self.assertEqual(properties['Municipality'], testName)

    def testMunicipalitySameMuniCount(self):
        testName = "Test Name"
        mun = MunicipalityProperty(testName, 0, 1, 2, 3)
        properties = mun.getProperties(CaseType.sameMuni)
        self.assertEqual(properties['count'], 0)

    def testMunicipalityOtherMuniCount(self):
        testName = "Test Name"
        mun = MunicipalityProperty(testName, 0, 1, 2, 3)
        properties = mun.getProperties(CaseType.otherMuni)
        self.assertEqual(properties['count'], 1)

    def testMunicipalityOtherStateCount(self):
        testName = "Test Name"
        mun = MunicipalityProperty(testName, 0, 1, 2, 3)
        properties = mun.getProperties(CaseType.otherState)
        self.assertEqual(properties['count'], 2)

    def testMunicipalityOtherCountryCount(self):
        testName = "Test Name"
        mun = MunicipalityProperty(testName, 0, 1, 2, 3)
        properties = mun.getProperties(CaseType.otherCountry)
        self.assertEqual(properties['count'], 3)

    def testMunicipalitiesArrayExists(self):
        self.assertTrue(MUNICIPALITIES_AMAZONAS[0] != None)

    def testNumMunicipalitiesInAmazonas(self):
        self.assertEqual(len(MUNICIPALITIES_AMAZONAS), 62)

    def testMaxValueMunicipalityCounts(self):
        for property in MUNICIPALITIES_AMAZONAS:
            self.assertTrue(property.sameMuni <= 100)
            self.assertTrue(property.otherMuni <= 100)
            self.assertTrue(property.otherState <= 100)
            self.assertTrue(property.otherCountry <= 100)

    def testMinValueMunicipalityCounts(self):
        for property in MUNICIPALITIES_AMAZONAS:
            self.assertTrue(property.sameMuni >=0)
            self.assertTrue(property.otherMuni >= 0)
            self.assertTrue(property.otherState >= 0)
            self.assertTrue(property.otherCountry >=0)
