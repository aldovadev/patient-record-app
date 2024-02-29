export interface PatientData {
  name: string;
  dateOfTreatment: string;
  treatmentDescription: string[];
  medicationsPrescribed: string[];
  costOfTreatment: number | null;
}