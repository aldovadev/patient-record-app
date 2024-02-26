import express from 'express';
import PatientController from '../controllers/PatientController';

const router = express.Router();

router.post('/patients', PatientController.createPatient);
router.get('/patients', PatientController.getPatients);
router.get('/patients/:id', PatientController.getPatientById);
router.put('/patients/:id', PatientController.updatePatient);
router.delete('/patients/:id', PatientController.deletePatient);

export default router;
