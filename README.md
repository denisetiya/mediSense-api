# Medisense API

The Medisense API is a platform designed to provide intelligent solutions in the healthcare field. This API is built using modern technologies such as **Express.js** with **TypeScript**, **MongoDB** as the database, **Prisma** as the ORM, **Zod** for data validation, and **OAuth** for secure authentication.

## Technologies Used

- **Express.js (TypeScript)**: A backend framework for building fast and efficient APIs.
- **MongoDB**: A NoSQL database for storing healthcare data.
- **Prisma**: An ORM that simplifies interactions with MongoDB.
- **Zod**: A schema validation library to ensure API inputs meet expected criteria.
- **OAuth**: A secure authentication system to protect user data.

---

## Key Features

### 1. **Symptom Analysis**  
Users can input symptoms they are experiencing, such as:
- Fever
- Cough
- Pain  

**Process**:
- The API analyzes the symptoms using data available in the database.
- Provides possible diagnoses based on the symptom analysis.

**Output**:
- A list of possible related illnesses.
- Diagnosis accuracy level.

---

### 2. **Medication Recommendation**  
Offers medication recommendations based on symptoms or diagnoses.

**Details**:
- The name of the recommended medication.
- Usage dosage.
- Side effects to watch out for.
- Drug contraindications.

---

### 3. **Disease Lookup**  
Allows users to search for information about specific diseases.

**Information Provided**:
- **Common Symptoms**: Frequently occurring symptoms.
- **Causes**: Primary factors causing the disease.
- **Treatment**: Available treatment recommendations.
- **Prevention**: Steps to avoid the disease.

---

### 4. **Drug Interaction Checker**  
Detects harmful interactions between medications entered by the user.

**Process**:
- The API processes the list of medications provided by the user.
- Issues warnings if dangerous combinations are detected.

**Output**:
- Risk level information.
- Explanation of why the interaction is harmful.

---

## Development Plan  
-- **Coming soon**

---


---

## Contribution  
Contributions are welcome!  
1. Fork this repository.  
2. Create a new branch: `feature/feature-name`.  
3. Submit a pull request to the main branch.

---

## License  
This project is licensed under the **MIT License**. See the `LICENSE` file for details.  

Would you like to add anything else? 😊
