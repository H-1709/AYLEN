// src/data/products.js

export const CATEGORY_LABELS = {
  all: "All Products",
  "lipid-lowering": "Lipid Lowering Therapy",
  "anti-hypertensive": "Anti Hypertensive Therapy",
  "anti-diabetic": "Anti Diabetic Therapy",
  "cad-therapy": "CAD Therapy",
  "vitamin-antacids": "Vitamin & Antacids",
  "nsaids-others": "NSAIDS & Others",
};

export const products = [
  // LIPID LOWERING
  {
    id: 1,
    brand: "ROSLEN ASP 10",
    slug: "ROSLEN-ASP-10",
    molecule: "ROSUVASTATIN 10 MG + ASPIRIN 75 MG CAPSULE",
    category: "lipid-lowering",
  },
  {
    id: 2,
    brand: "ROSLEN GOLD 10",
    slug: "ROSLEN-GOLD-10",
    molecule: "ROSUVASTATIN 10 MG + ASPIRIN 75 MG + CLOPIDOGREL 75 MG",
    category: "lipid-lowering",
  },
  {
    id: 3,
    brand: "ROSLEN 10",
    slug: "ROSLEN-10",
    molecule: "ROSUVASTATIN 10 MG",
    category: "lipid-lowering",
  },
  {
    id: 4,
    brand: "ROSLEN 20",
    slug: "ROSLEN-20",
    molecule: "ROSUVASTATIN 20 MG",
    category: "lipid-lowering",
  },
  {
    id: 5,
    brand: "ROSLEN GOLD 20",
    slug: "ROSLEN-GOLD-20",
    molecule: "ROSUVASTATIN 20 MG + ASPIRIN 75 MG + CLOPIDOGREL 75 MG",
    category: "lipid-lowering",
  },

  // ANTI HYPERTENSIVE
  {
    id: 6,
    brand: "TELMILEN 40",
    slug: "TELMILEN-40",
    molecule: "TELMISARTAN 40 MG",
    category: "anti-hypertensive",
  },
  {
    id: 7,
    brand: "TELMILEN CT",
    slug: "TELMILEN-CT",
    molecule: "TELMISARTAN 40 MG + CHLORTHALIDONE 12.5 MG",
    category: "anti-hypertensive",
  },
  {
    id: 8,
    brand: "TELMILEN AM",
    slug: "TELMILEN-AM",
    molecule: "TELMISARTAN 40 MG + AMLODIPINE 5 MG",
    category: "anti-hypertensive",
  },
  {
    id: 9,
    brand: "TELMILEN AMH",
    slug: "TELMILEN-AMH",
    molecule:
      "TELMISARTAN 40 MG + AMLODIPINE 5 MG + HYDROCHLOROTHIAZIDE 12.5 MG",
    category: "anti-hypertensive",
  },
  {
    id: 10,
    brand: "METOLEN XL 25",
    slug: "METOLEN-XL-25",
    molecule: "METOPROLOL SUCCINATE EXTENDED RELEASE 25 MG",
    category: "anti-hypertensive",
  },
  {
    id: 11,
    brand: "METOLEN XL 50",
    slug: "METOLEN-XL-50",
    molecule: "METOPROLOL SUCCINATE EXTENDED RELEASE 50 MG",
    category: "anti-hypertensive",
  },
  {
    id: 12,
    brand: "AMLEN 5 TAB",
    slug: "AMLEN-5",
    molecule: "AMLODIPINE 5 MG TABLETS",
    category: "anti-hypertensive",
  },

  // ANTI DIABETIC
  {
    id: 13,
    brand: "DAPALEN 10",
    slug: "DAPALEN-10",
    molecule: "DAPAGLIFLOZIN 10 MG TABLETS",
    category: "anti-diabetic",
  },
  {
    id: 14,
    brand: "GLIMILEN M1",
    slug: "GLIMILEN-M1",
    molecule: "GLIMIPERIDE 1 MG + METFORMIN 500 MG (SR) BILAYERED",
    category: "anti-diabetic",
  },
  {
    id: 15,
    brand: "GLIMILEN M2",
    slug: "GLIMILEN-M2",
    molecule: "GLIMIPERIDE 2 MG + METFORMIN 500 MG (SR) BILAYERED",
    category: "anti-diabetic",
  },
  {
    id: 16,
    brand: "GLIMILEN M2 FORTE",
    slug: "GLIMILEN-M2-FORTE",
    molecule: "GLIMIPERIDE 2 MG + METFORMIN 1000 MG (SR) BILAYERED",
    category: "anti-diabetic",
  },
  {
    id: 17,
    brand: "GLIMILEN MP2",
    slug: "GLIMILEN-MP2",
    molecule:
      "GLIMIPERIDE 2 MG + METFORMIN 500 MG (SR) + PIOGLITAZONE 15 MG",
    category: "anti-diabetic",
  },
  {
    id: 18,
    brand: "DAPALEN M (10/500)",
    slug: "DAPALEN-M",
    molecule: "DAPAGLIFLOZIN 10 MG + METFORMIN HCL 500 MG SR TABLETS",
    category: "anti-diabetic",
  },

  // CAD THERAPY
  {
    id: 19,
    brand: "NITROLEN 2.6",
    slug: "NITROLEN-2.6",
    molecule: "GLYCERYL TRINITRATE 2.6 (CR) NITROGLYCERIN",
    category: "cad-therapy",
  },

  // VITAMIN & ANTACIDS
  {
    id: 20,
    brand: "VDLEN 60 IU",
    slug: "VD-LEN 60K",
    molecule:
      "VITAMIN D3 60,000 IU CHEWABLE TABLET (ORANGE FLAVOUR)",
    category: "vitamin-antacids",
  },
  {
    id: 21,
    brand: "ZOMYLIN TAB",
    slug: "ZOMYLIN-TAB",
    molecule:
      "METHYLCOBALAMIN, PYRIDOXINE, FOLIC ACID AND VITAMIN D3 TABLETS",
    category: "vitamin-antacids",
  },
  {
    id: 22,
    brand: "ZOMYLIN INJ.",
    slug: "ZOMYLIN-INJ",
    molecule:
      "METHYLCOBALAMIN, PYRIDOXINE, NIACINAMIDE INJECTION",
    category: "vitamin-antacids",
  },
  {
    id: 23,
    brand: "ZOMYLIN-Q10 MD",
    slug: "ZOMYLIN-Q",
    molecule:
      "METHYLCOBALAMIN, PYRIDOXINE, FOLIC ACID, COENZYME Q10 & VIT D3",
    category: "vitamin-antacids",
  },
  {
    id: 24,
    brand: "PROLEN 200",
    slug: "PROLEN",
    molecule: "DIETARY FIBRE PROTEIN POWDER WITH MULTIVITAMIN",
    category: "vitamin-antacids",
  },
  // {
  //   id: 25,
  //   brand: "VITALEN CZ",
  //   slug: "VITALEN-CZ",
  //   molecule:
  //     "VITAMIN C 100 MG, ZINC 7.5 MG & VITAMIN D3 400 IU CHEWABLE TABLET",
  //   category: "vitamin-antacids",
  // },
  {
    id: 26,
    brand: "MZ-VITA",
    slug: "MZ-VITA",
    molecule:
      "MULTIVITAMIN & MULTIMINERAL SYRUP WITH MIX FRUIT FLAVOUR",
    category: "vitamin-antacids",
  },
  // {
  //   id: 27,
  //   brand: "P-VITA",
  //   slug: "P-VITA",
  //   molecule: "MULTIVITAMIN & MULTIMINERAL TABLET",
  //   category: "vitamin-antacids",
  // },
  {
    id: 28,
    brand: "FERILEN -XT",
    slug: "FERILEN-XT",
    molecule:
      "FERROUS ASCORBATE 100 MG + FOLIC ACID 1.5 MG + ZINC SULPHATE 22.5 MG",
    category: "vitamin-antacids",
  },
  {
    id: 29,
    brand: "FERILEN - INJ 5 ML",
    slug: "FERILEN-INJ",
    molecule: "IRON SUCROSE INJECTION 5 ML",
    category: "vitamin-antacids",
  },

  // NSAIDS & OTHERS (GI, COUGH, ANTIBIOTIC, ETC.)
  {
    id: 30,
    brand: "P-LEN 40",
    slug: "P-LEN 40",
    molecule: "PANTOPRAZOLE 40 MG TABLETS",
    category: "nsaids-others",
  },
  {
    id: 31,
    brand: "P-LEN D",
    slug: "P-LEN D",
    molecule: "PANTOPRAZOLE 40 MG + DOMPERIDONE 10 MG (SR) TABLET",
    category: "nsaids-others",
  },
  {
    id: 32,
    brand: "P-LEN DSR",
    slug: "P-LEN-DSR",
    molecule: "PANTOPRAZOLE 40 MG + DOMPERIDONE 30 MG (SR) CAPSULE",
    category: "nsaids-others",
  },
  {
    id: 33,
    brand: "IP-LEN 40 INJECTION",
    slug: "IP-LEN",
    molecule: "PANTOPRAZOLE 40 MG INJECTION",
    category: "nsaids-others",
  },
  {
    id: 34,
    brand: "AYDOL P",
    slug: "AYDOL-P",
    molecule: "ACECLOFENAC 100 MG + PARACETAMOL 325 MG",
    category: "nsaids-others",
  },
  {
    id: 35,
    brand: "AYDOL - SP",
    slug: "AYDOL-SP",
    molecule:
      "ACECLOFENAC 100 MG + PARACETAMOL 325 MG + SERRATIOPEPTIDASE 15 MG",
    category: "nsaids-others",
  },
  // {
  //   id: 36,
  //   brand: "AYDOL - SP NEW",
  //   slug: "AYDOL-SP-NEW",
  //   molecule:
  //     "ACECLOFENAC 100 MG + PARACETAMOL 325 MG + SERRATIOPEPTIDASE 15 MG",
  //   category: "nsaids-others",
  // },
  {
    id: 37,
    brand: "COLD-LEN TAB",
    slug: "COLD-LEN",
    molecule:
      "PARACETAMOL 500 MG + PHENYLEPHRINE HCL 10 MG + CHLORPHENIRAMINE MALEATE 4 MG + CAFFEINE 30 MG",
    category: "nsaids-others",
  },
  {
    id: 38,
    brand: "MONTILEN-LC",
    slug: "MONTILEN-LC",
    molecule: "LEVOCETIRIZINE HCL 5 MG + MONTELUKAST SODIUM 10 MG",
    category: "nsaids-others",
  },
  {
    id: 39,
    brand: "COFLEN-DX",
    slug: "COFLEN-DX",
    molecule:
      "DEXTROMETHORPHAN HBR 15 MG + PHENYLEPHRINE HCL 5 MG + CHLORPHENIRAMINE MALEATE 2 MG",
    category: "nsaids-others",
  },
  // {
  //   id: 40,
  //   brand: "MAX-DMR SYP 100 L",
  //   slug: "MAX-DMR-SYP-100L",
  //   molecule:
  //     "DEXTROMETHORPHAN HBR 15 MG + PHENYLEPHRINE HCL 5 MG + CHLORPHENIRAMINE MALEATE 2 MG",
  //   category: "nsaids-others",
  // },
  {
    id: 41,
    brand: "PIPZOLEN 4.5",
    slug: "PIPZOLEN-4.5",
    molecule: "PIPERACILLIN 4000 MG + TAZOBACTUM 500 MG",
    category: "nsaids-others",
  },
  {
    id: 42,
    brand: "ITRALEN - 100",
    slug: "ITRALEN-100",
    molecule: "ITRACONAZOLE 100 MG",
    category: "nsaids-others",
  },
  {
    id: 43,
    brand: "ITRALEN - 200",
    slug: "ITRALEN-200",
    molecule: "ITRACONAZOLE 200 MG",
    category: "nsaids-others",
  },
  {
    id: 44,
    brand: "RABLEN - D Cap.",
    slug: "RABLEN-D",
    molecule: "RABEPRAZOLE 20 MG + DOMPERIDONE 30 MG SR CAPSULE",
    category: "nsaids-others",
  },
  {
    id: 45,
    brand: "RABLEN - L Cap.",
    slug: "RABLEN-L",
    molecule: "RABEPRAZOLE 20 MG + LEVOSULPIRIDE 75 MG SR CAPSULE",
    category: "nsaids-others",
  },
  {
    id: 46,
    brand: "PREGALEN - NTM",
    slug: "PREGALEN-NTM",
    molecule:
      "PREGABALIN 75 MG + NORTRIPTYLINE 10 MG + METHYLCOBALAMIN 1500 MCG",
    category: "nsaids-others",
  },
  {
    id: 47,
    brand: "PANCRELEN TAB",
    slug: "PANCRELEN",
    molecule:
      "PANCREATIN 170 MG + ACTIVATED DIMETHICONE 80 MG TABLETS",
    category: "nsaids-others",
  },
  {
    id: 48,
    brand: "MEROLEN 1 GM",
    slug: "MEROLEN-INJ",
    molecule: "MEROPENEM 1 GM INJECTION IP WITH WFI",
    category: "nsaids-others",
  },
  {
    id: 49,
    brand: "MIKALEN-500 INJECTION",
    slug: "MIKALEN",
    molecule: "AMIKACIN SULPHATE INJECTION 500 MG/2 ML",
    category: "nsaids-others",
  },
];
