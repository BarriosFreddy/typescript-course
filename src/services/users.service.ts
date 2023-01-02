import { User } from "../model/User";
import users from "../source/users.data";
import { Authentication } from '../definition/Authentication';

class UserService implements Authentication {
  constructor() {}

  login(username: string, password: string) {
    if (!username || !password) return null;
    const user = this.findUser(username);
     if (!user) return null;
     if (user.password === password) return user;
     return null;
  }

  private findUser(username: string) {
    return users.find(user => user.username === username);
  }

  getUsers(): User[] {
    return users;
  }
}

const userService = new UserService();
export default userService;