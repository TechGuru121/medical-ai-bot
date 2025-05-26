const medicalData = {
  covid19: {
    description:
      "COVID-19 is caused by the SARS-CoV-2 virus. Symptoms range from mild respiratory illness to severe pneumonia.",
    symptoms: [
      "Fever",
      "Cough",
      "Shortness of breath",
      "Loss of taste or smell",
      "Fatigue",
    ],
    medications: [
      "Paracetamol for fever",
      "Oxygen therapy for severe cases",
      "Antiviral drugs (as prescribed)",
      "Supportive care",
    ],
    precautions: [
      "Wear masks in crowded places",
      "Maintain social distancing",
      "Wash hands frequently",
      "Get vaccinated",
    ],
  },

  dengue: {
    description:
      "Dengue fever is a mosquito-borne viral infection causing high fever and severe joint pain.",
    symptoms: [
      "High fever",
      "Severe headache",
      "Pain behind the eyes",
      "Joint and muscle pain",
      "Skin rash",
    ],
    medications: [
      "Paracetamol for fever and pain",
      "Hydration with oral rehydration salts",
      "Avoid NSAIDs like aspirin",
    ],
    precautions: [
      "Use mosquito repellents",
      "Wear long sleeves and pants",
      "Eliminate standing water",
    ],
  },

  malaria: {
    description:
      "Malaria is a parasitic disease transmitted by Anopheles mosquitoes causing cyclical fevers.",
    symptoms: [
      "Chills and sweating",
      "High fever",
      "Headache",
      "Muscle pain",
      "Nausea and vomiting",
    ],
    medications: [
      "Artemisinin-based combination therapies (ACT)",
      "Chloroquine (if sensitive strain)",
      "Supportive care",
    ],
    precautions: [
      "Use insecticide-treated mosquito nets",
      "Take prophylactic antimalarials when traveling",
      "Avoid mosquito bites",
    ],
  },

  headache: {
    description:
      "A headache is a common condition characterized by pain in the head, scalp, or neck.",
    symptoms: [
      "Dull or sharp head pain",
      "Pressure or tightness",
      "Sensitivity to light or sound",
      "Nausea (in migraines)",
    ],
    medications: [
      "Paracetamol",
      "Ibuprofen",
      "Rest and hydration",
    ],
    precautions: [
      "Avoid stress",
      "Maintain proper hydration",
      "Limit caffeine intake",
      "Get enough sleep",
    ],
  },

  hypertension: {
    description:
      "Hypertension is high blood pressure that increases the risk of heart disease and stroke.",
    symptoms: [
      "Often asymptomatic",
      "Headache",
      "Shortness of breath",
      "Nosebleeds (in severe cases)",
    ],
    medications: [
      "ACE inhibitors",
      "Beta blockers",
      "Diuretics",
      "Lifestyle modifications",
    ],
    precautions: [
      "Reduce salt intake",
      "Regular exercise",
      "Avoid smoking and alcohol",
      "Maintain healthy weight",
    ],
  },

  diabetes: {
    description: "A metabolic disorder characterized by high blood sugar levels.",
    symptoms: [
      "Frequent urination",
      "Increased thirst",
      "Fatigue",
      "Blurred vision",
    ],
    medications: [
      "Insulin therapy",
      "Metformin",
      "Diet and exercise",
    ],
    precautions: [
      "Maintain healthy diet",
      "Regular blood sugar monitoring",
      "Exercise regularly",
    ],
  },

  asthma: {
    description: "Chronic inflammatory disease of the airways causing breathing difficulty.",
    symptoms: [
      "Shortness of breath",
      "Wheezing",
      "Chest tightness",
      "Coughing",
    ],
    medications: [
      "Inhaled corticosteroids",
      "Bronchodilators",
      "Avoid triggers",
    ],
    precautions: [
      "Avoid allergens and smoke",
      "Use inhalers as prescribed",
      "Regular medical checkups",
    ],
  },

  tuberculosis: {
    description:
      "A contagious bacterial infection mainly affecting the lungs but can spread elsewhere.",
    symptoms: [
      "Persistent cough",
      "Weight loss",
      "Night sweats",
      "Fever",
    ],
    medications: [
      "Isoniazid",
      "Rifampicin",
      "Ethambutol",
      "Pyrazinamide",
    ],
    precautions: [
      "Complete full course of treatment",
      "Good ventilation",
      "Avoid close contact with infected persons",
    ],
  },

  cancer: {
    description:
      "Group of diseases involving abnormal cell growth with potential to spread.",
    symptoms: [
      "Unexplained weight loss",
      "Fatigue",
      "Lumps or swelling",
      "Changes in skin",
    ],
    medications: [
      "Surgery",
      "Chemotherapy",
      "Radiation therapy",
      "Targeted therapy",
    ],
    precautions: [
      "Avoid tobacco",
      "Maintain healthy diet",
      "Regular screenings",
    ],
  },

  chikungunya: {
    description:
      "Mosquito-borne viral disease causing fever and severe joint pain.",
    symptoms: ["Fever", "Joint pain", "Headache", "Muscle pain"],
    medications: ["Paracetamol", "Hydration", "Rest"],
    precautions: ["Mosquito bite prevention", "Use repellents", "Wear protective clothing"],
  },

  ebola: {
    description:
      "Severe and often fatal disease caused by Ebola virus.",
    symptoms: ["Fever", "Severe headache", "Muscle pain", "Vomiting", "Bleeding"],
    medications: ["Supportive care", "Experimental treatments"],
    precautions: ["Avoid contact with infected persons", "Practice good hygiene"],
  },

  monkeypox: {
    description:
      "Viral disease with symptoms similar to smallpox, causes rash and fever.",
    symptoms: ["Fever", "Headache", "Muscle aches", "Rash", "Swollen lymph nodes"],
    medications: ["Supportive care", "Antiviral drugs in severe cases"],
    precautions: ["Avoid contact with infected animals or persons", "Practice hygiene"],
  },

  hantavirus: {
    description:
      "Respiratory disease caused by hantavirus transmitted by rodents.",
    symptoms: ["Fever", "Muscle aches", "Fatigue", "Cough", "Shortness of breath"],
    medications: ["Supportive care", "Oxygen therapy if needed"],
    precautions: ["Avoid contact with rodent droppings", "Seal home entry points"],
  },

  sars: {
    description:
      "Severe respiratory illness caused by SARS coronavirus.",
    symptoms: ["Fever", "Dry cough", "Shortness of breath", "Muscle pain"],
    medications: ["Supportive care", "Antiviral treatments experimental"],
    precautions: ["Isolation of infected", "Use PPE", "Good hygiene"],
  },

  mers: {
    description:
      "Respiratory illness caused by MERS coronavirus.",
    symptoms: ["Fever", "Cough", "Shortness of breath", "Pneumonia"],
    medications: ["Supportive care", "Experimental antivirals"],
    precautions: ["Avoid contact with camels", "Good hygiene"],
  },

  typhoid: {
    description:
      "Bacterial infection caused by Salmonella typhi affecting intestines.",
    symptoms: ["High fever", "Weakness", "Stomach pain", "Loss of appetite"],
    medications: ["Antibiotics like ciprofloxacin", "Hydration"],
    precautions: ["Drink clean water", "Proper sanitation"],
  },

  cholera: {
    description:
      "Acute diarrheal disease caused by Vibrio cholerae bacteria.",
    symptoms: ["Severe watery diarrhea", "Dehydration", "Vomiting"],
    medications: ["Rehydration salts", "Antibiotics in severe cases"],
    precautions: ["Drink safe water", "Sanitation and hygiene"],
  },

  leptospirosis: {
    description:
      "Bacterial infection transmitted via contact with animal urine.",
    symptoms: ["High fever", "Headache", "Muscle aches", "Vomiting", "Jaundice"],
    medications: ["Antibiotics", "Supportive care"],
    precautions: ["Avoid contaminated water", "Wear protective clothing"],
  },

  meningitis: {
    description:
      "Inflammation of membranes around brain and spinal cord, often infectious.",
    symptoms: ["Fever", "Headache", "Stiff neck", "Nausea", "Confusion"],
    medications: ["Antibiotics (if bacterial)", "Supportive care"],
    precautions: ["Vaccination", "Avoid close contact with infected"],
  },

  whoopingCough: {
    description:
      "Highly contagious respiratory disease caused by Bordetella pertussis.",
    symptoms: ["Severe coughing fits", "Whooping sound during cough", "Vomiting"],
    medications: ["Antibiotics", "Supportive care"],
    precautions: ["Vaccination", "Avoid exposure"],
  },

  polio: {
    description:
      "Viral disease that can cause paralysis and muscle weakness.",
    symptoms: ["Fever", "Fatigue", "Paralysis in severe cases"],
    medications: ["Supportive care", "Physical therapy"],
    precautions: ["Vaccination"],
  },

  measles: {
    description:
      "Highly contagious viral infection with rash and fever.",
    symptoms: ["Fever", "Cough", "Runny nose", "Skin rash"],
    medications: ["Supportive care"],
    precautions: ["Vaccination"],
  },

  hepatitisA: {
    description:
      "Viral liver infection transmitted through contaminated food or water.",
    symptoms: ["Fever", "Fatigue", "Nausea", "Jaundice"],
    medications: ["Supportive care", "Rest"],
    precautions: ["Good hygiene", "Vaccination"],
  },

  hepatitisB: {
    description:
      "Viral liver infection transmitted through blood and bodily fluids.",
    symptoms: ["Fatigue", "Abdominal pain", "Jaundice"],
    medications: ["Antiviral drugs", "Monitoring liver health"],
    precautions: ["Safe sex", "Vaccination"],
  },

  hepatitisC: {
    description:
      "Viral liver infection mainly spread by blood contact.",
    symptoms: ["Fatigue", "Jaundice", "Dark urine"],
    medications: ["Antiviral drugs"],
    precautions: ["Avoid sharing needles", "Safe blood transfusions"],
  },

  hepatitisE: {
    description:
      "Liver infection spread through contaminated water.",
    symptoms: ["Fever", "Jaundice", "Nausea"],
    medications: ["Supportive care"],
    precautions: ["Drink clean water", "Proper sanitation"],
  },

  zikaVirus: {
    description:
      "Mosquito-borne viral infection causing fever and rash.",
    symptoms: ["Fever", "Rash", "Joint pain", "Conjunctivitis"],
    medications: ["Supportive care", "Hydration"],
    precautions: ["Avoid mosquito bites", "Use repellents"],
  },

  rabies: {
    description:
      "Viral disease transmitted by animal bites affecting the nervous system.",
    symptoms: ["Fever", "Headache", "Hydrophobia", "Confusion"],
    medications: ["Post-exposure prophylaxis", "Supportive care"],
    precautions: ["Avoid animal bites", "Vaccinate pets"],
  },

  stroke: {
    description:
      "Sudden interruption of blood supply to the brain causing damage.",
    symptoms: [
      "Sudden weakness or numbness",
      "Confusion",
      "Difficulty speaking",
      "Loss of balance",
    ],
    medications: [
      "Clot-busting drugs",
      "Blood pressure management",
      "Rehabilitation therapy",
    ],
    precautions: [
      "Control hypertension",
      "Avoid smoking",
      "Healthy diet",
      "Regular exercise",
    ],
  },

  heartAttack: {
    description:
      "Blockage of blood flow to heart muscles causing chest pain and damage.",
    symptoms: [
      "Chest pain",
      "Shortness of breath",
      "Sweating",
      "Nausea",
    ],
    medications: [
      "Aspirin",
      "Thrombolytics",
      "Angioplasty",
    ],
    precautions: [
      "Healthy diet",
      "Exercise regularly",
      "Avoid smoking",
      "Manage stress",
    ],
  },

  anemia: {
    description:
      "Condition caused by low red blood cells or hemoglobin leading to fatigue.",
    symptoms: [
      "Fatigue",
      "Pale skin",
      "Shortness of breath",
      "Dizziness",
    ],
    medications: [
      "Iron supplements",
      "Vitamin B12 injections",
      "Diet rich in iron",
    ],
    precautions: [
      "Eat iron-rich foods",
      "Treat underlying causes",
    ],
  },

  allergy: {
    description:
      "Immune system reaction to harmless substances.",
    symptoms: [
      "Sneezing",
      "Itchy eyes",
      "Rashes",
      "Swelling",
    ],
    medications: [
      "Antihistamines",
      "Corticosteroids",
      "Avoid allergens",
    ],
    precautions: [
      "Identify and avoid triggers",
      "Carry epinephrine if prescribed",
    ],
  },

  arthritis: {
    description:
      "Inflammation of joints causing pain and stiffness.",
    symptoms: [
      "Joint pain",
      "Swelling",
      "Reduced motion",
    ],
    medications: [
      "NSAIDs",
      "Physical therapy",
      "Steroid injections",
    ],
    precautions: [
      "Exercise regularly",
      "Maintain healthy weight",
    ],
  },

  depression: {
    description:
      "Mental health disorder causing persistent sadness and loss of interest.",
    symptoms: [
      "Low mood",
      "Loss of energy",
      "Sleep disturbances",
      "Poor concentration",
    ],
    medications: [
      "Antidepressants",
      "Psychotherapy",
    ],
    precautions: [
      "Seek professional help",
      "Maintain social support",
      "Healthy lifestyle",
    ],
  },

  anxietyDisorder: {
    description:
      "Mental health disorder characterized by excessive worry.",
    symptoms: [
      "Restlessness",
      "Rapid heartbeat",
      "Fatigue",
      "Difficulty concentrating",
    ],
    medications: [
      "Anxiolytics",
      "Cognitive-behavioral therapy",
    ],
    precautions: [
      "Stress management",
      "Regular exercise",
      "Adequate sleep",
    ],
  },

  obesity: {
    description:
      "Excess body fat increasing risk of diseases.",
    symptoms: [
      "Increased body weight",
      "Breathlessness",
      "Fatigue",
    ],
    medications: [
      "Diet and exercise",
      "Weight loss surgery (in some cases)",
    ],
    precautions: [
      "Healthy diet",
      "Regular physical activity",
    ],
  },

  chronicKidneyDisease: {
    description:
      "Gradual loss of kidney function.",
    symptoms: [
      "Fatigue",
      "Swelling in legs",
      "Changes in urination",
    ],
    medications: [
      "Blood pressure control",
      "Dietary changes",
    ],
    precautions: [
      "Control diabetes and hypertension",
      "Regular kidney function tests",
    ],
  },

  alzheimers: {
    description:
      "Progressive brain disorder causing memory loss.",
    symptoms: [
      "Memory loss",
      "Confusion",
      "Difficulty completing tasks",
    ],
    medications: [
      "Cholinesterase inhibitors",
      "Supportive care",
    ],
    precautions: [
      "Mental exercises",
      "Healthy lifestyle",
    ],
  },

  parkinsons: {
    description:
      "Neurological disorder affecting movement.",
    symptoms: [
      "Tremor",
      "Stiffness",
      "Slow movement",
    ],
    medications: [
      "Levodopa",
      "Dopamine agonists",
    ],
    precautions: [
      "Exercise",
      "Physical therapy",
    ],
  },

  strokeRehabilitation: {
    description:
      "Post-stroke recovery including physical and cognitive therapy.",
    symptoms: [
      "Weakness",
      "Speech difficulties",
      "Coordination problems",
    ],
    medications: [
      "Therapies tailored to individual needs",
    ],
    precautions: [
      "Early rehabilitation",
      "Supportive care",
    ],
  },

  gout: {
    description:
      "Form of arthritis caused by uric acid crystal buildup.",
    symptoms: [
      "Severe joint pain",
      "Redness and swelling",
    ],
    medications: [
      "NSAIDs",
      "Colchicine",
      "Uric acid reducers",
    ],
    precautions: [
      "Limit alcohol",
      "Avoid purine-rich foods",
    ],
  },

  influenza: {
    description:
      "Viral respiratory infection with fever and body aches.",
    symptoms: [
      "Fever",
      "Cough",
      "Sore throat",
      "Muscle aches",
    ],
    medications: [
      "Antiviral drugs",
      "Rest",
      "Hydration",
    ],
    precautions: [
      "Vaccination",
      "Hand hygiene",
    ],
  },

  bronchitis: {
    description:
      "Inflammation of bronchial tubes causing cough and mucus.",
    symptoms: [
      "Cough",
      "Sputum production",
      "Fatigue",
    ],
    medications: [
      "Cough suppressants",
      "Bronchodilators",
      "Rest",
    ],
    precautions: [
      "Avoid smoking",
      "Stay hydrated",
    ],
  },

  pneumonia: {
    description:
      "Lung infection causing inflammation and fluid build-up.",
    symptoms: [
      "Chest pain",
      "Cough with phlegm",
      "Fever",
      "Difficulty breathing",
    ],
    medications: [
      "Antibiotics (if bacterial)",
      "Supportive care",
    ],
    precautions: [
      "Vaccination",
      "Avoid smoking",
    ],
  },

  chronicObstructivePulmonaryDisease: {
    description:
      "Progressive lung disease limiting airflow.",
    symptoms: [
      "Shortness of breath",
      "Chronic cough",
      "Frequent respiratory infections",
    ],
    medications: [
      "Bronchodilators",
      "Steroids",
      "Oxygen therapy",
    ],
    precautions: [
      "Quit smoking",
      "Avoid pollutants",
    ],
  },

  glaucoma: {
    description:
      "Eye disease damaging optic nerve causing vision loss.",
    symptoms: [
      "Loss of peripheral vision",
      "Eye pain",
      "Nausea",
    ],
    medications: [
      "Eye drops",
      "Surgery in severe cases",
    ],
    precautions: [
      "Regular eye exams",
      "Manage eye pressure",
    ],
  },

  cataract: {
    description:
      "Clouding of eye lens causing blurred vision.",
    symptoms: [
      "Blurry vision",
      "Difficulty seeing at night",
      "Faded colors",
    ],
    medications: [
      "Surgical removal",
    ],
    precautions: [
      "Protect eyes from UV light",
      "Regular eye checkups",
    ],
  },

 

  osteoporosis: {
    description:
      "Condition where bones become weak and brittle.",
    symptoms: [
      "Back pain",
      "Loss of height",
      "Fractures with minor injuries",
    ],
    medications: [
      "Calcium and vitamin D supplements",
      "Bisphosphonates",
    ],
    precautions: [
      "Weight-bearing exercise",
      "Avoid smoking",
    ],
  },

  psoriasis: {
    description:
      "Chronic autoimmune skin disease causing red scaly patches.",
    symptoms: [
      "Red patches of skin",
      "Itching",
      "Scaling",
    ],
    medications: [
      "Topical steroids",
      "Phototherapy",
      "Systemic treatments",
    ],
    precautions: [
      "Moisturize skin",
      "Avoid triggers",
    ],
  },

  eczema: {
    description:
      "Inflammatory skin condition causing itchy rash.",
    symptoms: [
      "Itching",
      "Redness",
      "Dry skin",
    ],
    medications: [
      "Moisturizers",
      "Topical steroids",
      "Antihistamines",
    ],
    precautions: [
      "Avoid irritants",
      "Keep skin hydrated",
    ],
  },

  ulcerativeColitis: {
    description:
      "Chronic inflammation of colon causing ulcers.",
    symptoms: [
      "Diarrhea",
      "Abdominal pain",
      "Rectal bleeding",
    ],
    medications: [
      "Aminosalicylates",
      "Steroids",
      "Immunosuppressants",
    ],
    precautions: [
      "Regular monitoring",
      "Avoid triggers",
    ],
  },

  crohnsDisease: {
    description:
      "Chronic inflammatory bowel disease affecting any part of GI tract.",
    symptoms: [
      "Abdominal pain",
      "Diarrhea",
      "Weight loss",
    ],
    medications: [
      "Anti-inflammatory drugs",
      "Immunosuppressants",
      "Biologics",
    ],
    precautions: [
      "Dietary management",
      "Regular follow-up",
    ],
  },

  lupus: {
    description:
      "Autoimmune disease causing inflammation in multiple organs.",
    symptoms: [
      "Fatigue",
      "Joint pain",
      "Skin rash",
      "Fever",
    ],
    medications: [
      "NSAIDs",
      "Steroids",
      "Immunosuppressants",
    ],
    precautions: [
      "Avoid sunlight",
      "Regular medical care",
    ],
  },

  multipleSclerosis: {
    description:
      "Disease where immune system attacks nerve coverings in brain and spinal cord.",
    symptoms: [
      "Numbness",
      "Weakness",
      "Tingling",
      "Vision problems",
    ],
    medications: [
      "Steroids",
      "Immunomodulatory drugs",
    ],
    precautions: [
      "Regular exercise",
      "Avoid infections",
    ],
  },

  strokeTIA: {
    description:
      "Transient ischemic attack or mini-stroke causing temporary neurological symptoms.",
    symptoms: [
      "Sudden numbness",
      "Confusion",
      "Loss of balance",
    ],
    medications: [
      "Antiplatelet drugs",
      "Blood pressure control",
    ],
    precautions: [
      "Control risk factors",
      "Healthy lifestyle",
    ],
  },

  chronicFatigueSyndrome: {
    description:
      "Disorder with extreme fatigue not improved by rest.",
    symptoms: [
      "Severe fatigue",
      "Memory problems",
      "Muscle pain",
    ],
    medications: [
      "Symptomatic treatment",
      "Cognitive therapy",
    ],
    precautions: [
      "Pacing activities",
      "Good sleep hygiene",
    ],
  },

  fibromyalgia: {
    description:
      "Widespread musculoskeletal pain with fatigue and sleep issues.",
    symptoms: [
      "Muscle pain",
      "Fatigue",
      "Sleep disturbances",
    ],
    medications: [
      "Pain relievers",
      "Antidepressants",
      "Exercise",
    ],
    precautions: [
      "Stress management",
      "Regular physical activity",
    ],
  },

  endometriosis: {
    description:
      "Condition where tissue similar to uterine lining grows outside uterus.",
    symptoms: [
      "Pelvic pain",
      "Heavy periods",
      "Infertility",
    ],
    medications: [
      "Pain relievers",
      "Hormonal therapy",
      "Surgery",
    ],
    precautions: [
      "Regular medical follow-up",
      "Symptom management",
    ],
  },

  acne: {
    description:
      "Skin condition causing pimples and inflammation.",
    symptoms: [
      "Pimples",
      "Blackheads",
      "Redness",
    ],
    medications: [
      "Topical retinoids",
      "Antibiotics",
      "Benzoyl peroxide",
    ],
    precautions: [
      "Avoid harsh skin products",
      "Keep skin clean",
    ],
  },
};

export default medicalData;
