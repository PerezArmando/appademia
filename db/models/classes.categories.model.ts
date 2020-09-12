import { DataTypes } from 'sequelize';

import db from '@db/database';
import IModel from '@db/models/interfaces/imodel';

export default class ClassesCategories implements IModel {
    private _model: any;

    public getModel() {
        return this._model;
    }

    constructor() {
        this.setupModel();
    }
    
    private setupModel() {
        this._model = db.sequelize.define('Classes_Categories', {
            id: { type: DataTypes.BIGINT, primaryKey: true },
            ccName: { type: DataTypes.TEXT, allowNull: false, unique: true, field: 'cc_name' }
        });
    }
}