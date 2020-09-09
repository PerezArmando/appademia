const awilix = require('awilix');

import StudentsRepository from '@repositories/students.repository';

const repositories = {
    studentsRepository: awilix.asClass(StudentsRepository),
};

export default repositories;