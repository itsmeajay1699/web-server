

class TodoController {

    static async getTodos(req, res) {
        res.send('Get all todos');
    }

    static async createTodo(req, res) {
        res.send('Create a new todo');
    }

}

export { TodoController };