import { Router } from 'express';
import UserController from '../controllers/users.controller';
import validateUser from '../middlewares/user.middlewares';


const router = Router();

const usersController = new UserController();

router.get('/users', usersController.getAll)
router.get('/users/:id', usersController.getById)
router.post('/users', validateUser, usersController.createNewUser)

export default router;