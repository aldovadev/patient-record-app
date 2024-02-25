import { Request, Response } from 'express';
import PatientService from '../services/patientService';

class PatientController {
  static async createPatient(req: Request, res: Response): Promise<void> {
    try {
      // Extract patient data from request body
      const { name, id, dateOfTreatment, treatmentDescription, medicationsPrescribed, costOfTreatment } = req.body;

      // Call service layer to create a new patient
      const patient = await PatientService.createPatient(name, id, dateOfTreatment, treatmentDescription, medicationsPrescribed, costOfTreatment);

      // Send response with the created patient data
      res.status(201).json(patient);
    } catch (error) {
      console.error('Error creating patient:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default PatientController;
