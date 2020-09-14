const awilix = require('awilix');

import Students from '@db/models/students.model';
import Classes from '@db/models/classes.model';
import ClassesCategories from '@db/models/classes.categories.model';
import db from '@db/database';

const dbAndModels = {
    database: awilix.asValue(db),

    // models
    Students: awilix.asValue(Students),
    Classes: awilix.asValue(Classes),
    ClassesCategories: awilix.asValue(ClassesCategories)
};

export default dbAndModels;