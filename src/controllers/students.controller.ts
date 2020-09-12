import { graphql } from 'graphql';

import studentsSchema from '@graphql/students.schema';
import IStudentsControllerDependencies from '@controllers/dependencies.interfaces/istudents.controller.dependencies';
import IStudentsRepository from '@repositories/classes.interfaces/istudents.repository';
import IStudentsController from '@controllers/classes.interfaces/istudents.controller';

export default class StudentsController implements IStudentsController {
    private _studentsRepository: IStudentsRepository;

    constructor({ studentsRepository }: IStudentsControllerDependencies) {
        this._studentsRepository = studentsRepository;
    }

    public async getStudentByIdAsync(id: number, query: string) {
        const result = await this._studentsRepository.getByIdAsync(id);
        return await graphql(studentsSchema, query, result);
    }
}