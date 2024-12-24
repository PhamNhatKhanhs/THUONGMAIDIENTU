import mongoose from 'mongoose';

// Review Schema
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Reviewer name is required'] },
    rating: { type: Number, required: [true, 'Rating is required'], min: 0, max: 5 }, // Ensures rating is between 0 and 5
    comment: { type: String, required: [true, 'Comment is required'] },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'User ID is required'],
      ref: 'User', // Reference to User model
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Product Schema
const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'User ID is required'],
      ref: 'User', // Reference to User model
    },
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true, // Removes extra whitespace
    },
    image: {
      type: String,
      required: [true, 'Product image is required'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    reviews: [reviewSchema], // Embedding Review Schema
    rating: {
      type: Number,
      required: true,
      default: 0, // Default average rating
      min: 0,
      max: 5, // Ensures rating doesn't exceed 5
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0, // Default number of reviews
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      default: 0, // Default price
    },
    countInStock: {
      type: Number,
      required: [true, 'Stock count is required'],
      default: 0, // Default stock quantity
      min: 0, // Ensures stock count is not negative
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Define Product Model
const Product = mongoose.model('Product', productSchema);

export default Product;
