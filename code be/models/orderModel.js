import mongoose from 'mongoose';

// Order Schema
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // Reference to User
      required: true,
      ref: 'User', // Establishes relationship with User model
    },
    orderItems: [
      {
        name: { type: String, required: [true, 'Product name is required'] },
        qty: { type: Number, required: [true, 'Quantity is required'] },
        image: { type: String, required: [true, 'Product image is required'] },
        price: { type: Number, required: [true, 'Product price is required'] },
        product: {
          type: mongoose.Schema.Types.ObjectId, // Reference to Product
          required: [true, 'Product ID is required'],
          ref: 'Product', // Establishes relationship with Product model
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: [true, 'Shipping address is required'] },
      city: { type: String, required: [true, 'City is required'] },
      postalCode: { type: String, required: [true, 'Postal code is required'] },
      country: { type: String, required: [true, 'Country is required'] },
    },
    paymentMethod: {
      type: String,
      required: [true, 'Payment method is required'],
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Define Order Model
const Order = mongoose.model('Order', orderSchema);

export default Order;
