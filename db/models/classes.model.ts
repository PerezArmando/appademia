import { DataTypes } from 'sequelize';

import db from '@db/database';

const Classes = db.sequelize.define('Classes', {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    identifier: { type: DataTypes.TEXT, allowNull: false, unique: true },
    className: { type: DataTypes.TEXT, allowNull: false, unique: true, field: 'class_name' }
});

export default Classes;