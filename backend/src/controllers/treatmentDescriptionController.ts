import { Request, Response } from 'express';
import TreatmentDescriptionService from '../services/treatmentDescriptionService';
import TreatmentDescription from '../models/TreatmentDescription';

class TreatmentDescriptionController {
  static async getTreatmentDescriptions(req: Request, res: Response): Promise<void> {
    try {
      const treatmentDescriptions: TreatmentDescription[] = await TreatmentDescriptionService.getTreatmentDescriptions();
      res.json(treatmentDescriptions);
    } catch (error) {
      console.error('Error fetching treatment descriptions:', error);
      res.status(500).json({ error: 'Failed to fetch treatment descriptions' });
    }
  }
}

export default TreatmentDescriptionController;
