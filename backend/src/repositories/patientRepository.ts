import db from '../config/database';
import Patient from '../models/Patient';

class PatientRepository {
  static async createPatient(name: string, id: string, dateOfTreatment: Date, treatmentDescription: string[], medicationsPrescribed: string[], costOfTreatment: number): Promise<Patient> {
    // Create a new patient document in the "patients" collection
    const patientRef = await db.collection('patients').add({
      name,
      id,
      dateOfTreatment,
      treatmentDescription,
      medicationsPrescribed,
      costOfTreatment
    });

    // Retrieve the newly created patient document
    const patientSnapshot = await patientRef.get();
    const newPatient = patientSnapshot.data() as Patient;
    newPatient.id = patientSnapshot.id;

    // Return the created patient
    return newPatient;
  }

  static async readPatients(): Promise<Patient[]> {
    // Retrieve all patient documents from the "patients" collection
    const patientsSnapshot = await db.collection('patients').get();
    const patients: Patient[] = [];

    // Iterate over each patient document and convert it to a Patient object
    patientsSnapshot.forEach((doc) => {
      const patientData = doc.data() as Patient;
      patientData.id = doc.id;
      patients.push(patientData);
    });

    // Return the list of patients
    return patients;
  }

  static async readPatient(id: string): Promise<Patient | null> {
    // Retrieve a patient document by its ID from the "patients" collection
    const patientDoc = await db.collection('patients').doc(id).get();

    // Check if the patient document exists
    if (patientDoc.exists) {
      const patientData = patientDoc.data() as Patient;
      patientData.id = patientDoc.id;

      // Return the patient data
      return patientData;
    } else {
      // Patient not found
      return null;
    }
  }

  static async updatePatient(id: string, name: string, dateOfTreatment: Date, treatmentDescription: string[], medicationsPrescribed: string[], costOfTreatment: number): Promise<Patient | null> {
    // Update an existing patient document in the "patients" collection
    const patientRef = db.collection('patients').doc(id);
    await patientRef.update({
      name,
      dateOfTreatment,
      treatmentDescription,
      medicationsPrescribed,
      costOfTreatment
    });

    // Retrieve the updated patient document
    const updatedPatientDoc = await patientRef.get();

    // Check if the patient document exists
    if (updatedPatientDoc.exists) {
      const updatedPatientData = updatedPatientDoc.data() as Patient;
      updatedPatientData.id = updatedPatientDoc.id;

      // Return the updated patient data
      return updatedPatientData;
    } else {
      // Patient not found
      return null;
    }
  }

  static async deletePatient(id: string): Promise<boolean> {
    // Delete an existing patient document from the "patients" collection
    await db.collection('patients').doc(id).delete();

    // Return true to indicate success
    return true;
  }
}

export default PatientRepository;
