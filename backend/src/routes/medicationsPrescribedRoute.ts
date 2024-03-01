import express from 'express';
import MedicationPrescribedController from '../controllers/medicationsPrescribedController';

const router = express.Router();

router.get('/', MedicationPrescribedController.getMedicationsPrescribed);

export default router; 