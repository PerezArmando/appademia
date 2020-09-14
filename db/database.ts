import { Sequelize } from 'sequelize';
import config from 'config';

class Database {
    private _sequelize: Sequelize;

    get sequelize() {
        return this._sequelize;
    }

    constructor() {
        console.log('SOMETHING COOL!!!');
        this._sequelize = new Sequelize(
            config.get('db.database'),
            config.get('db.username'),
            config.get('db.password'),
            {
                host: config.get('db.host'),
                dialect: 'mysql'
            });
    }
}

const db = new Database();

export default db;