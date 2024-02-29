import Patient from '../models/Patient';
import PatientRepository from '../repositories/patientRepository';

class PatientService {
  static async createPatient(name: string, dateOfTreatment: Date, treatmentDescription: string[], medicationsPrescribed: string[], costOfTreatment: number): Promise<Patient> {
    try {
      const patients = await PatientRepository.readPatients();

      for (let i = 0; i < patients.length; i++) {
        if (patients[i].name === name) return patients[i]
      }


      const newPatient = await PatientRepository.createPatient(name, dateOfTreatment, treatmentDescription, medicationsPrescribed, costOfTreatment);

      return newPatient;
    } catch (error) {
      console.error('Error creating patient:', error);
      throw new Error('Failed to create patient');
    }
  }

  static async getPatients(): Promise<Patient[]> {
    try {
      const patients = await PatientRepository.readPatients();
      return patients;
    } catch (error) {
      console.error('Error getting patients:', error);
      throw new Error('Failed to get patients');
    }
  }

  static async getPatientById(id: string): Promise<Patient | null> {
    try {
      const patient = await PatientRepository.readPatient(id);
      return patient;
    } catch (error) {
      console.error('Error getting patient by ID:', error);
      throw new Error('Failed to get patient by ID');
    }
  }

  static async updatePatient(id: string, name: string, dateOfTreatment: Date, treatmentDescription: string[], medicationsPrescribed: string[], costOfTreatment: number): Promise<Patient | null> {
    try {
      const updatedPatient = await PatientRepository.updatePatient(id, name, dateOfTreatment, treatmentDescription, medicationsPrescribed, costOfTreatment);
      return updatedPatient;
    } catch (error) {
      console.error('Error updating patient:', error);
      throw new Error('Failed to update patient');
    }
  }

  static async deletePatient(id: string): Promise<boolean> {
    try {
      const success = await PatientRepository.deletePatient(id);
      return success;
    } catch (error) {
      console.error('Error deleting patient:', error);
      throw new Error('Failed to delete patient');
    }
  }
}

export default PatientService;
