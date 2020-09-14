import { DataTypes } from 'sequelize';

import db from '@db/database';


const ClassesCategories = db.sequelize.define('Classes_Categories', {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    ccName: { type: DataTypes.TEXT, allowNull: false, unique: true, field: 'cc_name' }
});

export default ClassesCategories;