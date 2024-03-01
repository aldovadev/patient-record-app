import MedicationsPrescribedRepository from '../repositories/medicationsPrescribedRepository';
import MedicationsPrescribed from '../models/MedicationsPrescribed';

class MedicationsPrescribedService {
  static async getMedicationsPrescribed(): Promise<MedicationsPrescribed[]> {
    try {
      const medicationsPrescribed = await MedicationsPrescribedRepository.readMedicationsPrescribed();
      return medicationsPrescribed;
    } catch (error) {
      console.error('Error fetching treatment descriptions:', error);
      throw new Error('Failed to fetch treatment descriptions');
    }
  }
}

export default MedicationsPrescribedService;