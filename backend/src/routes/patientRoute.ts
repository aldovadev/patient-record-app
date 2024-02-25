import express, { Router, Request, Response } from 'express';
import PatientController from '../controllers/patientController';

const router: Router = express.Router();

// Route for creating a new patient
router.post('/', PatientController.createPatient);

export default router;