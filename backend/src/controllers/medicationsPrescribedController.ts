import { Request, Response } from 'express';
import MedicationsPrescribedService from '../services/medicationsPrescribedService';
import MedicationsPrescribed from '../models/MedicationsPrescribed';

class MedicationsPrescribedController {
  static async getMedicationsPrescribed(req: Request, res: Response): Promise<void> {
    try {
      const medicationsPrescribed: MedicationsPrescribed[] = await MedicationsPrescribedService.getMedicationsPrescribed();
      res.json(medicationsPrescribed);
    } catch (error) {
      console.error('Error fetching medications prescribed:', error);
      res.status(500).json({ error: 'Failed to fetch medications prescribed' });
    }
  }
}

export default MedicationsPrescribedController;
