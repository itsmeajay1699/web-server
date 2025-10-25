import { Schema, Model } from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    desription: {
        type: String,
        required: false
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true
})

export const Todo = Model('Todo', todoSchema);