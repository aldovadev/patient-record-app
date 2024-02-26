import Patient from '../models/Patient';
import PatientRepository from '../repositories/patientRepository';

class PatientService {
  static async createPatient(name: string, id: string, dateOfTreatment: Date, treatmentDescription: string[], medicationsPrescribed: string[], costOfTreatment: number): Promise<Patient> {
    try {
      // Call the repository method to create a new patient
      const newPatient = await PatientRepository.createPatient(name, id, dateOfTreatment, treatmentDescription, medicationsPrescribed, costOfTreatment);
      return newPatient;
    } catch (error) {
      // Handle errors
      console.error('Error creating patient:', error);
      throw new Error('Failed to create patient');
    }
  }

  static async getPatients(): Promise<Patient[]> {
    try {
      // Call the repository method to get all patients
      const patients = await PatientRepository.readPatients();
      return patients;
    } catch (error) {
      // Handle errors
      console.error('Error getting patients:', error);
      throw new Error('Failed to get patients');
    }
  }

  static async getPatientById(id: string): Promise<Patient | null> {
    try {
      // Call the repository method to get a patient by ID
      const patient = await PatientRepository.readPatient(id);
      return patient;
    } catch (error) {
      // Handle errors
      console.error('Error getting patient by ID:', error);
      throw new Error('Failed to get patient by ID');
    }
  }

  static async updatePatient(id: string, name: string, dateOfTreatment: Date, treatmentDescription: string[], medicationsPrescribed: string[], costOfTreatment: number): Promise<Patient | null> {
    try {
      // Call the repository method to update a patient
      const updatedPatient = await PatientRepository.updatePatient(id, name, dateOfTreatment, treatmentDescription, medicationsPrescribed, costOfTreatment);
      return updatedPatient;
    } catch (error) {
      // Handle errors
      console.error('Error updating patient:', error);
      throw new Error('Failed to update patient');
    }
  }

  static async deletePatient(id: string): Promise<boolean> {
    try {
      // Call the repository method to delete a patient
      const success = await PatientRepository.deletePatient(id);
      return success;
    } catch (error) {
      // Handle errors
      console.error('Error deleting patient:', error);
      throw new Error('Failed to delete patient');
    }
  }
}

export default PatientService;
