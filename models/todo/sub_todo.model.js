import mongoose from 'mongoose';
const subTodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reviewed: {
      type: Boolean,
      default: false,
    },
    Todo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const subTodo = mongoose.model('SubTodos', subTodoSchema);
