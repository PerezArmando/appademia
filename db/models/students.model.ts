import { DataTypes } from 'sequelize';

import IModel from '@db/models/interfaces/imodel';
import db from '@db/database';

export default class Students implements IModel {
    private _model: any;

    public getModel() {
        return this._model;
    }

    constructor() {
        this.setupModel();
    }

    private setupModel() {
        this._model = db.sequelize.define('Students', {
            id: { type: DataTypes.BIGINT, primaryKey: true },
            identifier: { type: DataTypes.TEXT, allowNull: false, unique: true },
            firstName: { type: DataTypes.TEXT, allowNull: false, field: 'first_name' },
            lastName: { type: DataTypes.TEXT, allowNull: false, field: 'last_name' },
            sex: { type: DataTypes.BOOLEAN, allowNull: false },
            email: { type: DataTypes.TEXT, allowNull: false, unique: true },
            photo: { type: DataTypes.TEXT, allowNull: false },
        });
    }
}