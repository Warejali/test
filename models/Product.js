import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: Array, required: true },
    file: { type: Array, required: true },
    price: { type: Number, required: true },
    buyPrice: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    year: { type: String, required: true },
    metaTags: { type: String, required: true },
    model: { type: String, required: true },
    endDate: { type: String, required: true },
    itemType: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    banner: String,
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
