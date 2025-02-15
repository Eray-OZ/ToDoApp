import { Router } from "express"
import { getTodos, addTodo, deleteTodo } from './controller.js'


const router = Router()



router.get("/", getTodos)
router.post("/", addTodo)
router.delete("/:id", deleteTodo)





export default router