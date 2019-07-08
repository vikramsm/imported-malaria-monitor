from django.test import TestCase

from .models import Municipality, MalariaCase, Patient

# Create your tests here.
class ModelsTestCase(TestCase):

    def testTestFramework(self):
        self.assertTrue(True)

    def testCreateMunicipality(self):
        self.assertTrue(Municipality(code=1, name="Name", state="ST"))

    def testMunicipalityCode(self):
        m1 = Municipality(code=1, name="Name", state="ST")
        self.assertEqual(m1.code, 1)

    def testMunicipalityName(self):
        m1 = Municipality(code=1, name="Name", state="ST")
        self.assertEqual(m1.name, "Name")

    def testMunicipalityState(self):
        m1 = Municipality(code=1, name="Name", state="ST")
        self.assertEqual(m1.state, "ST")

    def testCreateMalariaCase(self):
        m1 = Municipality(code=1, name="Name", state="ST")
        self.assertTrue(MalariaCase(munNoti=m1, munResi=m1, munInfe=m1, paisRes=1))

    def testMalariaCaseMunNoti(self):
        m1 = Municipality(code=1, name="Name", state="ST")
        case = MalariaCase(munNoti=m1, munResi=m1, munInfe=m1, paisRes=1)
        self.assertEqual(case.munNoti, m1)

    def testMalariaCaseMunResi(self):
        m1 = Municipality(code=1, name="Name", state="ST")
        case = MalariaCase(munNoti=m1, munResi=m1, munInfe=m1, paisRes=1)
        self.assertEqual(case.munResi, m1)

    def testMalariaCaseMunInfe(self):
        m1 = Municipality(code=1, name="Name", state="ST")
        case = MalariaCase(munNoti=m1, munResi=m1, munInfe=m1, paisRes=1)
        self.assertEqual(case.munInfe, m1)

    def testMalariaCaseMunPais(self):
        m1 = Municipality(code=1, name="Name", state="ST")
        case = MalariaCase(munNoti=m1, munResi=m1, munInfe=m1, paisRes=1)
        self.assertEqual(case.paisRes, 1)

    def testNotValidCases(self):
        testCase = MalariaCase.objects.get(paisRes=2)
        self.assertFalse(testCase.isValid())

    def testValidCaseSameCounty(self):
        m1 = Municipality(code=1, name="Name", state="ST")
        case = MalariaCase(munNoti=m1, munResi=m1, munInfe=m1, paisRes=1)
        self.assertTrue(case.isValid())

    def testValidCase(self):
        testCase = MalariaCase.objects.get(paisRes=1)
        self.assertTrue(testCase.isValid())

    def setUp(self):
        # Create Municipalities
        m1 = Municipality.objects.create(code=1, name="name", state="ST")
        m2 = Municipality.objects.create(code=2, name="name2", state="ST2")
        # Create Malaria Cases
        MalariaCase.objects.create(munNoti=m1, munResi=m2, munInfe=m1, paisRes=1)
        MalariaCase.objects.create(munNoti=m2, munResi=m1, munInfe=m2, paisRes=3)
        MalariaCase.objects.create(munNoti=m1, munResi=m1, munInfe=m2, paisRes=2)

    def testImportedCases(self):
        m = Municipality.objects.get(code=1)
        self.assertEqual(m.target.count(), 2)

    def testAdd0ImportedCases(self):
        m1 = Municipality.objects.create(code=3, name="name3", state="ST")
        m2 = Municipality.objects.create(code=4, name="name4", state="ST2")
        MalariaCase.objects.create(munNoti=m1, munResi=m1, munInfe=m2, paisRes=2)
        m = Municipality.objects.get(code=1)
        self.assertEqual(m.target.count(), 2)

    def testAdd1ImportedCases(self):
        m1 = Municipality.objects.create(code=3, name="name3", state="ST")
        m2 = Municipality.objects.create(code=4, name="name4", state="ST2")
        MalariaCase.objects.create(munNoti=m2, munResi=m1, munInfe=m2, paisRes=1)
        m = Municipality.objects.get(code=1)
        self.assertEqual(m.target.count(), 2)

    def testExportedCases(self):
        m = Municipality.objects.get(code=1)
        self.assertEqual(m.origin.count(), 1)

    def testAdd0ExportedCases(self):
        m1 = Municipality.objects.create(code=3, name="name3", state="ST")
        m2 = Municipality.objects.create(code=4, name="name4", state="ST2")
        MalariaCase.objects.create(munNoti=m2, munResi=m1, munInfe=m2, paisRes=1)
        m = Municipality.objects.get(code=1)
        self.assertEqual(m.origin.count(), 1)

    def testAdd1ExportedCases(self):
        m1 = Municipality.objects.create(code=3, name="name3", state="ST")
        m2 = Municipality.objects.create(code=4, name="name4", state="ST2")
        MalariaCase.objects.create(munNoti=m1, munResi=m1, munInfe=m2, paisRes=2)
        m = Municipality.objects.get(code=1)
        self.assertEqual(m.origin.count(), 1)

    def testCountCases(self):
        allCases = MalariaCase.objects.all()
        self.assertEqual(len(allCases), 3)

    def testAddCases(self):
        m1 = Municipality.objects.create(code=3, name="name3", state="ST")
        m2 = Municipality.objects.create(code=4, name="name4", state="ST2")
        MalariaCase.objects.create(munNoti=m1, munResi=m1, munInfe=m2, paisRes=2)
        allCases = MalariaCase.objects.all()
        self.assertEqual(len(allCases), 4)
