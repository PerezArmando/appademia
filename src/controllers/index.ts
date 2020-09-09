const awilix = require('awilix');

import StudentsController from '@controllers/students.controller';

const controllers = {
    studentsController: awilix.asClass(StudentsController),
};

export default controllers;