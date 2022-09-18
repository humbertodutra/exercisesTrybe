import { Request, Response } from "express";
import { STATUS_CODES } from "http";
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

    public createNewUser = async(req: Request, res: Response) => {
        const user = req.body

        const userCreated = await this.userService.createNewUser(user)
        res.status(StatusCodes.CREATED).json(userCreated);
    }

    public updateUser = async (req: Request, res: Response) => {
        const userData = req.body
        const id = parseInt(req.params.id)

        const userUpdated = await this.userService.updateUser(id, userData);

        res.status(StatusCodes.OK).json(userUpdated)
    }

    public removeUser = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        const removeUser = await this.userService.deleteUser(id);


        res.status(StatusCodes.OK).json(removeUser)
    }
}

export default UserController