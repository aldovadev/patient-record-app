
import PatientRepository from '../repositories/patientRepository';
import Patient from '../models/Patient';

class PatientService {
  static async createPatient(name: string, id: string, dateOfTreatment: Date, treatmentDescription: string[], medicationsPrescribed: string[], costOfTreatment: number): Promise<Patient> {
    // Call repository layer to create a new patient
    return PatientRepository.createPatient(name, id, dateOfTreatment, treatmentDescription, medicationsPrescribed, costOfTreatment);
  }
}

export default PatientService;
