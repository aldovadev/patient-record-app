import Patient from '../models/Patient';

class PatientRepository {
  static async createPatient(name: string, id: string, dateOfTreatment: Date, treatmentDescription: string[], medicationsPrescribed: string[], costOfTreatment: number): Promise<Patient> {
    // Simulate database operation to create a new patient
    const newPatient = new Patient(name, id, dateOfTreatment, treatmentDescription, medicationsPrescribed, costOfTreatment);

    // Return the created patient
    return newPatient;
  }
}

export default PatientRepository;
