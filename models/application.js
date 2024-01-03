import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    father: { type: String, required: true },
    mother: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    marriedStatus: { type: String, required: true },
    nid: { type: Number, required: true },
    passport: { type: String, required: true },
    district: { type: String, required: true },
    subdistrict: { type: String, required: true },
    postoffice: { type: String, required: true },
    image: { type: String, required: true},
    
  },
  {
    timestamps: true,
  }
);

const Application =
  mongoose.models.Application || mongoose.model('Application', applicationSchema);
export default Application;
