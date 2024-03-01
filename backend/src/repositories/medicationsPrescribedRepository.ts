import db from '../config/database';
import MedicationsPrescribed from '../models/MedicationsPrescribed';

class MedicationsPrescribedRepository {
  static async readMedicationsPrescribed(): Promise<MedicationsPrescribed[]> {
    try {
      const medicationsPrescribedSnapshot = await db.collection('medications_prescribed').get();

      const medicationsPrescribed: MedicationsPrescribed[] = [];
      medicationsPrescribedSnapshot.forEach(doc => {
        const data = doc.data();
        const medicationsPrescribedItem = new MedicationsPrescribed(data.value, data.label);
        medicationsPrescribed.push(medicationsPrescribedItem);
      });

      return medicationsPrescribed;
    } catch (error) {
      console.error('Error fetching medications prescribed:', error);
      throw new Error('Failed to fetch medications prescribed');
    }
  }
}

export default MedicationsPrescribedRepository;
