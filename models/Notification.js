import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema(
  {
    notificationMessage: { type: String },
    name: { type: String, required: true },
    email: { type: String },
    shop: { type: String },
    price: { type: Number, required: true },
    productId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Notification =
  mongoose.models.Notification ||
  mongoose.model('Notification', notificationSchema);
export default Notification;
