import db from '../config/database';
import TreatmentDescription from '../models/TreatmentDescription';

class TreatmentDescriptionRepository {
  static async readTreatmentDescriptions(): Promise<TreatmentDescription[]> {
    try {
      const treatmentDescriptionsSnapshot = await db.collection('treatment_description').get();

      const treatmentDescriptions: TreatmentDescription[] = [];
      treatmentDescriptionsSnapshot.forEach(doc => {
        const data = doc.data();
        const treatmentDescription = new TreatmentDescription(data.value, data.label);
        treatmentDescriptions.push(treatmentDescription);
      });

      return treatmentDescriptions;
    } catch (error) {
      console.error('Error fetching treatment descriptions:', error);
      throw new Error('Failed to fetch treatment descriptions');
    }
  }
}

export default TreatmentDescriptionRepository;
