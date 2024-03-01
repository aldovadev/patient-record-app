import { Request, Response, NextFunction } from 'express';
import patientRequest from '../schemas/patientSchema'

class ValidateMiddleware {
  static validatePatientRequest(req: Request, res: Response, next: NextFunction): any {
    const { error } = patientRequest.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next()
  }
}

export default ValidateMiddleware;
