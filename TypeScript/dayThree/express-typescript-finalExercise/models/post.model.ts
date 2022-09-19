import { Pool } from 'mysql2/promise';
import Post from '../interface/post.interface';

export default class PostModel {
    public connection: Pool;

    constructor(connection: Pool){
        this.connection = connection;
    }

    public async getAll(): Promise<Post[]> {
        const result = await this.connection
            .execute('SELECT * FROM Posts')

        const [rows] = result
        return rows as Post[];
    }
}