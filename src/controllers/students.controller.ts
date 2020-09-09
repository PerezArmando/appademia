import { graphql } from 'graphql';

import studentsSchema from '@graphql/students.schema';
import StudentsService from '@services/students.service';
import StudentsRepository from '@repositories/students.repository';

interface Dependencies {
    studentsService: StudentsService,
    studentsRepository: StudentsRepository
};

export default class StudentsController {
    private _studentsService: StudentsService;
    private _studentsRepository: StudentsRepository;

    constructor({ studentsService, studentsRepository }: Dependencies) {
        this._studentsService = studentsService;
        this._studentsRepository = studentsRepository;
    }

    public async getStudentByIdAsync(id: number) {
        const result = await this._studentsRepository.getByIdAsync(id);
        return await graphql(studentsSchema, '{ first_name }', result);
    }
}