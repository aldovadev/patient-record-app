class Patient {
  constructor(
    public name: string,
    public id: string,
    public dateOfTreatment: Date,
    public treatmentDescription: string[],
    public medicationsPrescribed: string[],
    public costOfTreatment: number
  ) { }
}

export default Patient;
