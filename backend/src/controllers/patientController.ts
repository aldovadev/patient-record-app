import { Request, Response } from 'express';
import PatientService from '../services/patientService';

class PatientController {
  static async createPatient(req: Request, res: Response): Promise<void> {
    try {

      const { name, treatmentDescription, medicationsPrescribed, costOfTreatment } = req.body;
      const dateOfTreatment = new Date(req.body.dateOfTreatment)
      const newPatient = await PatientService.createPatient(name, dateOfTreatment, treatmentDescription, medicationsPrescribed, costOfTreatment);

      if (name == newPatient.name) {
        res.status(409).json("already exist");
        return;
      }

      res.status(201).json(newPatient);
    } catch (error) {
      console.error('Error creating patient:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getPatients(req: Request, res: Response): Promise<void> {
    try {
      const patients = await PatientService.getPatients();
      res.json(patients);
    } catch (error) {
      console.error('Error getting patients:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getPatientById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const patient = await PatientService.getPatientById(id);
      if (patient) {
        res.json(patient);
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    } catch (error) {
      console.error('Error getting patient by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async updatePatient(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, treatmentDescription, medicationsPrescribed, costOfTreatment } = req.body;
      const dateOfTreatment = new Date(req.body.dateOfTreatment)
      const updatedPatient = await PatientService.updatePatient(id, name, dateOfTreatment, treatmentDescription, medicationsPrescribed, costOfTreatment);
      if (updatedPatient) {
        res.json(updatedPatient);
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    } catch (error) {
      console.error('Error updating patient:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deletePatient(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const success = await PatientService.deletePatient(id);
      if (success) {
        res.json({ message: 'Patient deleted successfully' });
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    } catch (error) {
      console.error('Error deleting patient:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default PatientController;
