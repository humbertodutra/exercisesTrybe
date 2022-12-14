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
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM Users');
            const [rows] = result;
            return rows;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM Users WHERE id=?', [id]);
            const [rows] = result;
            const [user] = rows;
            return user;
        });
    }
    createNewUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            const newUser = yield this.connection.execute('INSERT INTO Users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
            const [dataInserted] = newUser;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, user);
        });
    }
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            yield this.connection.execute('Update Users SET name = ?, email = ?, password = ?', [name, email, password]);
            const editedUser = { id, name, email, password };
            return editedUser;
        });
    }
    removeUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userToBeDeleted = yield this.getById(id);
            if (!userToBeDeleted)
                return null;
            yield this.connection.execute('DELETE FROM Users WHERE id = ?', [id]);
            return userToBeDeleted;
        });
    }
}
exports.default = UserModel;
