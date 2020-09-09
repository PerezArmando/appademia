import BaseRepository from '@repositories/base.repository';
import StudentModel from '@db/models/students.model';
import IStudentsRepository from '@repositories/interfaces/istudents.repository';

export default class StudentsRepository extends BaseRepository implements IStudentsRepository {
    constructor() {
        super(StudentModel);
    }
}