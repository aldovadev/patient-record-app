import express from 'express';
import TreatmentDescriptionController from '../controllers/treatmentDescriptionController';

const router = express.Router();

router.get('/', TreatmentDescriptionController.getTreatmentDescriptions);

export default router; 