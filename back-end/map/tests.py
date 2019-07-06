from django.test import TestCase

from .models import Municipality, MalariaCase, Patient

# Create your tests here.
class ModelsTestCase(TestCase):

    def testTestFramework(self):
        self.assertTrue(True)

    def setUp(self):
        # Create Municipalities
        m1 = Municipality.objects.create(code=1, name="name", state="ST")
        m2 = Municipality.objects.create(code=2, name="name2", state="ST2")
        # Create Malaria Cases
        MalariaCase.objects.create(munNoti=m1, munResi=m2, munInfe=m1, paisRes=1)
        MalariaCase.objects.create(munNoti=m2, munResi=m1, munInfe=m2, paisRes=1)
        MalariaCase.objects.create(munNoti=m1, munResi=m1, munInfe=m2, paisRes=2)

    def testImportedCases(self):
        m = Municipality.objects.get(code=1)
        self.assertEqual(m.target.count(), 2)

    def testExportedCases(self):
        m = Municipality.objects.get(code=1)
        self.assertEqual(m.origin.count(), 1)

    def testIsValidCases(self):
        testCase = MalariaCase.objects.get(paisRes=2)
        self.assertFalse(testCase.isValid())
