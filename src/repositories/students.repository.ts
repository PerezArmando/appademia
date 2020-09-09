import BaseRepository from '@repositories/base.repository';
import StudentModel from '@db/models/students.model';

export default class StudentsRepository extends BaseRepository {
    constructor() {
        super(StudentModel);
    }
}