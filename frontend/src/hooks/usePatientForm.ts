import { useState } from "react";
import { PatientData } from "../interfaces/patientInterface";
import { createPatient } from "../utils/apis/patientApi";
import { toast } from 'react-toastify';

const usePatientForm = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (key: any, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const newTreatmentDescription: string[] = formData.treatmentDescription.map((obj: { value: any; }) => obj.value)
    const newMedicationsPrescribed: string[] = formData.medicationsPrescribed.map((obj: { value: any; }) => obj.value)
    const newCostOfTreatment: number = parseFloat(formData.costOfTreatment || "0");

    const payload: PatientData = {
      name: formData.name,
      dateOfTreatment: formData.dateOfTreatment,
      treatmentDescription: newTreatmentDescription,
      medicationsPrescribed: newMedicationsPrescribed,
      costOfTreatment: newCostOfTreatment,
    }




    try {
      await createPatient(payload);
      toast.success('Patient created successfully');
      console.log(payload)
    } catch (error) {
      console.error('Error creating patient:', error);
      toast.error('Failed to create patient');
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default usePatientForm;
