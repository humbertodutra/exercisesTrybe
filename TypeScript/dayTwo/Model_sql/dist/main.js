"use strict";
// ./main.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Book_1 = __importDefault(require("./models/Book"));
const connection_1 = __importDefault(require("./models/connection"));
const main = async () => {
    const bookModel = new Book_1.default(connection_1.default);
    const title = readline_sync_1.default.question('Digite o título do livro: ');
    const price = readline_sync_1.default.questionFloat('Digite o preço do livro: ');
    const author = readline_sync_1.default.question('Digite o autor do livro: ');
    const isbn = readline_sync_1.default.question('Digite o isbn do livro: ');
    const newBook = { title, price, author, isbn };
    const createdBook = await bookModel.create(newBook);
    console.log(createdBook);
};
main();
