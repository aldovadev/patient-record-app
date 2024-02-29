import db from '../config/database';
import Patient from '../models/Patient';

class PatientRepository {
  static async createPatient(name: string, dateOfTreatment: Date, treatmentDescription: string[], medicationsPrescribed: string[], costOfTreatment: number): Promise<Patient> {
    const patientRef = await db.collection('patient').add({
      name: name,
      dateOfTreatment: dateOfTreatment,
      treatmentDescription: treatmentDescription,
      medicationsPrescribed: medicationsPrescribed,
      costOfTreatment: costOfTreatment
    });

    const patientSnapshot = await patientRef.get();
    const newPatient = patientSnapshot.data() as Patient;
    newPatient.id = patientSnapshot.id;

    return newPatient;
  }

  static async readPatients(): Promise<Patient[]> {
    const patientsSnapshot = await db.collection('patient').get();
    const patients: Patient[] = [];

    patientsSnapshot.forEach((doc) => {
      const patientData = doc.data() as Patient;
      patientData.id = doc.id;
      patients.push(patientData);
    });

    return patients;
  }

  static async readPatient(id: string): Promise<Patient | null> {
    const patientDoc = await db.collection('patient').doc(id).get();

    if (patientDoc.exists) {
      const patientData = patientDoc.data() as Patient;
      patientData.id = patientDoc.id;

      return patientData;
    } else {
      return null;
    }
  }

  static async updatePatient(id: string, name: string, dateOfTreatment: Date, treatmentDescription: string[], medicationsPrescribed: string[], costOfTreatment: number): Promise<Patient | null> {
    const patientRef = db.collection('patient').doc(id);
    await patientRef.update({
      name,
      dateOfTreatment,
      treatmentDescription,
      medicationsPrescribed,
      costOfTreatment
    });

    const updatedPatientDoc = await patientRef.get();

    if (updatedPatientDoc.exists) {
      const updatedPatientData = updatedPatientDoc.data() as Patient;
      updatedPatientData.id = updatedPatientDoc.id;

      return updatedPatientData;
    } else {
      return null;
    }
  }

  static async deletePatient(id: string): Promise<boolean> {
    await db.collection('patient').doc(id).delete();
    return true;
  }
}

export default PatientRepository;
