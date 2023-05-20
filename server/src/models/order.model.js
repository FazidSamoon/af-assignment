import mongoose from "mongoose";

const orderSchema = new Mongoose.Schema(
  {
    userID: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    sellerID: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        productID: {
          type: Mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
        },
      },
    ],
    amount: {
      type: Number,
    },
    address: {
      type: Object,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
