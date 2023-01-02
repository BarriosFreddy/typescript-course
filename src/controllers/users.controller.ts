import userService from "../services/users.service";
import { Request, Response } from "express";

class UserController {
  constructor() {}

  getUsers(req: Request, res: Response) {
    const users = userService.getUsers();
    res.send(users);
  }

  login(req: Request, res: Response) {
    const { query: { username, password } } = req;
    if (typeof username === 'string' && typeof password === 'string') {
        const user = userService.login(username, password);
        res.send(user ? `Hi, ${user?.fullname}` : 'Not authenticated' );
    }
  }
}

const userController = new UserController();
export default userController;
