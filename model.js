import mongoose from 'mongoose'



const todoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true,
        maxlength: 110,
        trim: true
    }
}, {
    timestamps: true
})


const Todo = mongoose.model('Todo', todoSchema)

export default Todo