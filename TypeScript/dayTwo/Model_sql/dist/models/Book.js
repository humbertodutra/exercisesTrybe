"use strict";
// ./models/Book.ts
Object.defineProperty(exports, "__esModule", { value: true });
class BookModel {
    constructor(connection) {
        this.connection = connection;
    }
    async getAll() {
        const result = await this.connection.execute('SELECT * FROM books');
        const [rows] = result;
        return rows;
    }
    async create(book) {
        const { title, price, author, isbn } = book;
        const result = await this.connection.execute('INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)', [title, price, author, isbn]);
        const [dataInserted] = result;
        const { insertId } = dataInserted;
        return { id: insertId, ...book };
    }
}
exports.default = BookModel;
