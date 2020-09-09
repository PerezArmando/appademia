import { DataTypes } from 'sequelize';

import db from '@db/setup';

const StudentModel = db.sequelize.define('Students', {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    identifier: { type: DataTypes.TEXT, allowNull: false, unique: true },
    first_name: { type: DataTypes.TEXT, allowNull: false },
    last_name: { type: DataTypes.TEXT, allowNull: false },
    sex: { type: DataTypes.BOOLEAN, allowNull: false },
    email: { type: DataTypes.TEXT, allowNull: false, unique: true },
    photo: { type: DataTypes.TEXT, allowNull: false },
});

export default StudentModel;