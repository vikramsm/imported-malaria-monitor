from enum import Enum


class CaseType(Enum):
    sameMuni = 1
    otherMuni = 2
    otherState = 3
    otherCountry = 4


class MunicipalityProperty:

    def __init__(self, name: str, sameMuni: int, otherMuni: int, otherState: int, otherCountry: int):
        self.name = name
        self.sameMuni = sameMuni
        self.otherMuni = otherMuni
        self.otherState = otherState
        self.otherCountry = otherCountry

    def getProperties(self, caseType: CaseType):

        count = self.sameMuni

        if caseType == CaseType.otherMuni: count = self.otherMuni
        if caseType == CaseType.otherState: count = self.otherState
        if caseType == CaseType.otherCountry: count = self.otherCountry

        properties = {
            "Country": "Brazil",
            "State": "Acre",
            "Municipality": self.name,
            "count": count
        }

        return properties

# Array containing all municipalities in Amazonas and their counts for each type of case
MUNICIPALITIES_AMAZONAS = [MunicipalityProperty("ALVARÃES", 43, 69, 57, 95),
                           MunicipalityProperty("AMATURÁ", 71, 32, 48, 58),
                           MunicipalityProperty("ANAMÃ", 8, 97, 90, 22),
                           MunicipalityProperty("ANORI", 74, 64, 81, 88),
                           MunicipalityProperty("APUÍ", 39, 46, 22, 60),
                           MunicipalityProperty("ATALAIA DO NORTE", 5, 29, 13, 42),
                           MunicipalityProperty("AUTAZES", 72, 12, 55, 26),
                           MunicipalityProperty("BARCELOS", 52, 97, 47, 9),
                           MunicipalityProperty("BARREIRINHA", 36, 80, 89, 94),
                           MunicipalityProperty("BENJAMIN CONSTANT", 20, 64, 81, 78),
                           MunicipalityProperty("BERURI", 5, 49, 23, 62),
                           MunicipalityProperty("BOA VISTA DO RAMOS", 90, 33, 15, 47),
                           MunicipalityProperty("BOCA DO ACRE", 75, 18, 58, 32),
                           MunicipalityProperty("BORBA", 60, 61, 51, 17),
                           MunicipalityProperty("CAAPIRANGA", 46, 3, 94, 60),
                           MunicipalityProperty("CANUTAMA", 32, 97, 87, 53),
                           MunicipalityProperty("CARAUARI", 18, 39, 29, 96),
                           MunicipalityProperty("CAREIRO", 61, 32, 23, 90),
                           MunicipalityProperty("CAREIRO DA VÁRZEA", 4, 76, 15, 32),
                           MunicipalityProperty("COARI", 98, 70, 12, 26),
                           MunicipalityProperty("CODAJÁS", 41, 13, 85, 70),
                           MunicipalityProperty("EIRUNEPÉ", 35, 7, 31, 64),
                           MunicipalityProperty("ENVIRA", 80, 51, 53, 7),
                           MunicipalityProperty("FONTE BOA", 74, 45, 50, 1),
                           MunicipalityProperty("GUAJARÁ", 17, 90, 22, 46),
                           MunicipalityProperty("HUMAITÁ", 12, 84, 70, 41),
                           MunicipalityProperty("IPIXUNA", 57, 28, 92, 86),
                           MunicipalityProperty("IRANDUBA", 51, 23, 90, 80),
                           MunicipalityProperty("ITACOATIARA", 97, 68, 62, 25),
                           MunicipalityProperty("ITAMARATI", 92, 63, 9, 19),
                           MunicipalityProperty("ITAPIRANGA", 36, 8, 32, 65),
                           MunicipalityProperty("JAPURÁ", 32, 3, 29, 60),
                           MunicipalityProperty("JURUÁ", 78, 49, 2, 5),
                           MunicipalityProperty("JUTAÍ", 73, 45, 50, 1),
                           MunicipalityProperty("LÁBREA", 18, 91, 73, 47),
                           MunicipalityProperty("MANACAPURU", 14, 87, 71, 43),
                           MunicipalityProperty("MANAQUIRI", 61, 32, 44, 89),
                           MunicipalityProperty("MANAUS", 57, 28, 92, 86),
                           MunicipalityProperty("MANICORÉ", 3, 75, 15, 31),
                           MunicipalityProperty("MARAÃ", 0, 72, 13, 28),
                           MunicipalityProperty("MAUÉS", 46, 18, 87, 75),
                           MunicipalityProperty("NHAMUNDÁ", 43, 40, 35, 72),
                           MunicipalityProperty("NOVA OLINDA DO NORTE", 90, 63, 59, 18),
                           MunicipalityProperty("NOVO AIRAO", 87, 62, 57, 40),
                           MunicipalityProperty("NOVO ARIPUANA", 34, 35, 30, 13),
                           MunicipalityProperty("PARINTINS", 31, 85, 80, 63),
                           MunicipalityProperty("PAUINI", 79, 8, 3, 87),
                           MunicipalityProperty("PRESIDENTE FIGUEIREDO", 77, 6, 1, 85),
                           MunicipalityProperty("RIO PRETO DA EVA", 24, 81, 76, 59),
                           MunicipalityProperty("SANTA ISABEL DO RIO NEGRO", 22, 29, 24, 8),
                           MunicipalityProperty("SANTO ANTÔNIO DO IÇÁ", 71, 54, 49, 32),
                           MunicipalityProperty("SÃO GABRIEL DA CACHOEIRA", 69, 53, 48, 31),
                           MunicipalityProperty("SÃO PAULO DE OLIVENCA", 17, 27, 22, 5),
                           MunicipalityProperty("SÃO SEBASTIÃO DO UATUMA", 91, 77, 72, 55),
                           MunicipalityProperty("SILVES", 14, 0, 96, 79),
                           MunicipalityProperty("TABATINGA", 14, 0, 96, 79),
                           MunicipalityProperty("TAPAUÁ", 89, 75, 70, 53),
                           MunicipalityProperty("TEFÉ", 38, 24, 19, 2),
                           MunicipalityProperty("TONANTINS", 63, 49, 44, 27),
                           MunicipalityProperty("UARINI", 63, 48, 43, 26),
                           MunicipalityProperty("URUCARÁ", 37, 23, 18, 1),
                           MunicipalityProperty("URUCURITUBA",8, 73, 68, 51),
                           ]
