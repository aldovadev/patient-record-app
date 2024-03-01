import TreatmentDescriptionRepository from '../repositories/treatmentDescriptionRepository';
import TreatmentDescription from '../models/TreatmentDescription';

class TreatmentDescriptionService {
  static async getTreatmentDescriptions(): Promise<TreatmentDescription[]> {
    try {
      const treatmentDescriptions = await TreatmentDescriptionRepository.readTreatmentDescriptions();
      return treatmentDescriptions;
    } catch (error) {
      console.error('Error fetching treatment descriptions:', error);
      throw new Error('Failed to fetch treatment descriptions');
    }
  }
}

export default TreatmentDescriptionService;
