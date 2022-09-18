"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    constructor(userService = new user_service_1.default()) {
        this.userService = userService;
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(users);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const user = yield this.userService.getById(id);
            if (!user) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND);
            }
            res.status(http_status_codes_1.StatusCodes.OK).json(user);
        });
        this.createNewUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const userCreated = yield this.userService.createNewUser(user);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(userCreated);
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userData = req.body;
            const id = parseInt(req.params.id);
            const userUpdated = yield this.userService.updateUser(id, userData);
            res.status(http_status_codes_1.StatusCodes.OK).json(userUpdated);
        });
        this.removeUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const removeUser = yield this.userService.deleteUser(id);
            res.status(http_status_codes_1.StatusCodes.OK).json(removeUser);
        });
    }
}
exports.default = UserController;
