import Joi from 'joi'

const patientRequest = Joi.object({
  name: Joi.string().required(),
  dateOfTreatment: Joi.date().iso().required(),
  treatmentDescription: Joi.array().items(Joi.string()).required(),
  medicationsPrescribed: Joi.array().items(Joi.string()).required(),
  costOfTreatment: Joi.number().positive().required()
});

export default patientRequest