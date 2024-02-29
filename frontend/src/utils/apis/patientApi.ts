import axios from 'axios';
import { PatientData } from '../../interfaces/patientInterface';

const BASE_URL = 'http://localhost:8000';

export const getAllPatients = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/patient`);
    return response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

export const getPatientById = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/patient/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching patient with ID ${id}:`, error);
    throw error;
  }
};

export const createPatient = async (patientData: PatientData) => {
  try {
    const response = await axios.post(`${BASE_URL}/patient`, patientData);
    return response.data;
  } catch (error) {
    console.error('Error creating patient:', error);
    throw error;
  }
};

export const updatePatient = async (id: string, patientData: PatientData) => {
  try {
    const response = await axios.put(`${BASE_URL}/patient/${id}`, patientData);
    return response.data;
  } catch (error) {
    console.error(`Error updating patient with ID ${id}:`, error);
    throw error;
  }
};

export const deletePatient = async (id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/patients/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting patient with ID ${id}:`, error);
    throw error;
  }
};
