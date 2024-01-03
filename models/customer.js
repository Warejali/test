import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema(
  {
    passport: { type: String, required: true },
    image: { type: String, required: true},
    image2: { type: String},
  },
  {
    timestamps: true,
  }
);

const Customer =
  mongoose.models.Customer || mongoose.model('Customer', customerSchema);
export default Customer;
