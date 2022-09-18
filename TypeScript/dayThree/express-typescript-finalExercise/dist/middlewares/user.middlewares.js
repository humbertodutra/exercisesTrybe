"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const properties = ['name', 'email', 'password'];
function validateProperties(user) {
    for (let i = 0; i < properties.length; i += 1) {
        if (!Object.prototype.hasOwnProperty.call(user, properties[i])) {
            return [false, properties[i]];
        }
    }
    return [true, null];
}
;
function validateValues(user) {
    const entries = Object.entries(user);
    for (let i = 0; i < entries.length; i += 1) {
        const [property, value] = entries[i];
        if (!value) {
            return [false, property];
        }
    }
    return [true, null];
}
function validateData(name, password, email) {
    if (password.length < 6 || password.length > 12) {
        const message = 'The field "password" must have between 6 and 12 characters';
        return ({ status: 400, message });
    }
    if (name.length < 3) {
        const message = 'The field "name" must have at least 3 characters';
        return ({ status: 400, message });
    }
    const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    if (!regexEmail.test(email)) {
        const message = 'The field "email" must have a valid email format';
        return ({ status: 400, message });
    }
    return null;
}
function validateUser(req, res, next) {
    const userRequest = req.body;
    const { name, email, password } = userRequest;
    let [valid, property] = validateProperties(userRequest);
    if (!valid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(`The field ${property} is required`);
    }
    ;
    [valid, property] = validateValues(userRequest);
    if (!valid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(`The field ${property} cant be empty`);
    }
    if (!name || !email || !password) {
        const message = 'The fields "name", "email" and "password" are required';
        return res.status(400).json({ message });
    }
    const error = validateData(name, password, email);
    if (error)
        return res.status(error.status).json({ message: error.message });
    next();
}
exports.default = validateUser;
