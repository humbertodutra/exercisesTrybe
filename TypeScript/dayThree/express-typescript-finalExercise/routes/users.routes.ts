import { Router } from 'express';
import UserController from '../controllers/users.controller';


const router = Router();

const usersController = new UserController();

router.get('/users', usersController.getAll)
router.get('/users/:id', usersController.getById)

export default router;