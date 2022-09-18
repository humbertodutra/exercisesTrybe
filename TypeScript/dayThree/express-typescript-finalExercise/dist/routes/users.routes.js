"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const user_middlewares_1 = __importDefault(require("../middlewares/user.middlewares"));
const router = (0, express_1.Router)();
const usersController = new users_controller_1.default();
router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.getById);
router.post('/users', user_middlewares_1.default, usersController.createNewUser);
router.put('/users/:id', user_middlewares_1.default, usersController.updateUser);
router.delete('/users/:id', user_middlewares_1.default, usersController.removeUser);
exports.default = router;
