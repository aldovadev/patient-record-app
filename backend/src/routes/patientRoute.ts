import express from 'express';
import PatientController from '../controllers/patientController';
import ValidateMiddleware from '../middleware/validateMiddleware'

const router = express.Router();

router.post('/', ValidateMiddleware.validatePatientRequest, PatientController.createPatient);
router.get('/', PatientController.getPatients);
router.get('/:id', PatientController.getPatientById);
router.patch('/:id', ValidateMiddleware.validatePatientRequest, PatientController.updatePatient);
router.delete('/:id', PatientController.deletePatient);

export default router;
