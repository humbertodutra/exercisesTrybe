import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../services/user.service";

class UserController {
    constructor(private userService = new UserService()) {}

    public getAll = async (_req: Request, res: Response) => {
        const users = await this.userService.getAll();
        res.status(StatusCodes.OK).json(users)
    }

    public getById = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        const user = await this.userService.getById(id);

        if(!user){
            return res.status(StatusCodes.NOT_FOUND);
        }

        res.status(StatusCodes.OK).json(user);
    }
}

export default UserController