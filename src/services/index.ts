const awilix = require('awilix');

import StudentsService from '@services/students.service';

const services = {
    studentsService: awilix.asClass(StudentsService),
};

export default services;