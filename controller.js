import Todo from './model.js'



const getTodos = async (req, res) => {
    try {

        const todos = await Todo.find({})

        res.status(200).render("todo", { datas: todos })
    } catch (error) {
        res.status(404).json({ error })
    }
}



const addTodo = async (req, res) => {

    const todo = req.body

    if (!todo.todo) {
        return res.status(400).json({ success: false, message: "Please provide the field" });
    }

    const newTodo = new Todo(todo)

    try {

        await newTodo.save()

        res.status(200).redirect("/")

    } catch (error) {
        res.status(404).json({ error })
    }
}



const deleteTodo = async (req, res) => {

    try {

        const { id } = req.params

        await Todo.findByIdAndDelete(id)

        res.status(200).redirect("/")

    } catch (error) {
        res.status(404).json({ error })
    }
}








export { addTodo, getTodos, deleteTodo }