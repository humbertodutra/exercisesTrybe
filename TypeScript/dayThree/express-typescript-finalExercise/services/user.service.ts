import connection from "../models/connection";
import UserModel from "../models/user.model";
import User from "../interface/user.interface";

class UserService {
    public model: UserModel;

    constructor() {
        this.model = new UserModel(connection);
    }

    public async getAll(): Promise<User[]> {
        const users = await this.model.getAll()
        return users
    }

    public async getById(id: number): Promise<User> {
        const user = await this.model.getById(id);
        console.log(user)
        return user
    }

    public async createNewUser(user: User): Promise<User>{
        return this.model.createNewUser(user)
    }

    public async updateUser(id: number, user: User): Promise<User>{
        return this.model.updateUser(id, user)
    }

    public async deleteUser(id: number): Promise<User | null>{
        return this.model.removeUser(id)
    }

}

export default UserService;