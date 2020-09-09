import { graphql } from 'graphql';

import studentsSchema from '@graphql/students.schema';
import IStudentsService from '@services/interfaces/istudents.service';
import IStudentsRepository from '@repositories/interfaces/istudents.repository';

interface Dependencies {
    studentsService: IStudentsService,
    studentsRepository: IStudentsRepository
};

export default class StudentsController {
    private _studentsService: IStudentsService;
    private _studentsRepository: IStudentsRepository;

    constructor({ studentsService, studentsRepository }: Dependencies) {
        this._studentsService = studentsService;
        this._studentsRepository = studentsRepository;
    }

    public async getStudentByIdAsync(id: number) {
        const result = await this._studentsRepository.getByIdAsync(id);
        return await graphql(studentsSchema, '{ first_name }', result);
    }
}