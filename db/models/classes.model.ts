import { DataTypes } from 'sequelize';

import db from '@db/database';
import IModel from '@db/models/interfaces/imodel';

export default class Classes implements IModel {
    private _model: any;

    public getModel() {
        return this._model;
    }

    constructor() {
        this.setupModel();
    }
    
    private setupModel() {
        this._model = db.sequelize.define('Classes', {
            id: { type: DataTypes.BIGINT, primaryKey: true },
            identifier: { type: DataTypes.TEXT, allowNull: false, unique: true },
            className: { type: DataTypes.TEXT, allowNull: false, unique: true, field: 'class_name' }
        });
    }
}