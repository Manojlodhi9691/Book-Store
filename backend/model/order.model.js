import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    bookId: { type: String, required: true },
    bookName: { type: String, required: true },
    price: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;