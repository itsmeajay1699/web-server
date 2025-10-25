

class UserController {

    static async getUser(req, res) {
        res.send('Get user details');
    }

    static async createUser(req, res) {
        res.send('Create a new user');
    }

}

export { UserController };