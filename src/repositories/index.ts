const awilix = require('awilix');

import StudentsRepository from '@repositories/students.repository';
import ClassesRepository from '@repositories/classes.repository';
import ClassesCategoriesRespository from '@repositories/classes.categories.repository';

const repositories = {
    studentsRepository: awilix.asClass(StudentsRepository),
    classesRepository: awilix.asClass(ClassesRepository),
    classesCategoriesRepository: awilix.asClass(ClassesCategoriesRespository),
};

export default repositories;