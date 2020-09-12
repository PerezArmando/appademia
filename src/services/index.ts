const awilix = require('awilix');

import StudentsService from '@services/students.service';
import ClassesService from '@services/classes.service';
import ClassesCategoriesService from '@services/classes.categories.service';

const services = {
    studentsService: awilix.asClass(StudentsService),
    classesService: awilix.asClass(ClassesService),
    classesCategoriesService: awilix.asClass(ClassesCategoriesService),
};

export default services;