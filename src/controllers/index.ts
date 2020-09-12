const awilix = require('awilix');

import StudentsController from '@controllers/students.controller';
import ClassesController from '@controllers/classes.controller';
import ClassesCategoriesController from '@controllers/classes.categories.controller';

const controllers = {
    studentsController: awilix.asClass(StudentsController),
    classesController: awilix.asClass(ClassesController),
    classesCategoriesController: awilix.asClass(ClassesCategoriesController),
};

export default controllers;