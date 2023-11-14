import mongoose, { mongo } from "mongoose";


const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
})


const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        orderItems: {
            type: [orderItemSchema],
        },
        address: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum:["PENDING", "CANCELED", "DELIVERED"],
            default: "PENDING"
        }
    }, 
    {timestamps: true})


export const Order = mongoose.model("Order", orderSchema)