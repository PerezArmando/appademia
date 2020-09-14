import { DataTypes } from 'sequelize';

import db from '@db/database';

const Students = db.sequelize.define('Students', {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    identifier: { type: DataTypes.TEXT, allowNull: false, unique: true },
    firstName: { type: DataTypes.TEXT, allowNull: false, field: 'first_name' },
    lastName: { type: DataTypes.TEXT, allowNull: false, field: 'last_name' },
    sex: { type: DataTypes.BOOLEAN, allowNull: false },
    email: { type: DataTypes.TEXT, allowNull: false, unique: true },
    photo: { type: DataTypes.TEXT, allowNull: false },
});

export default Students;