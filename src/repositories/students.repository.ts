import BaseRepository from '@repositories/base.repository';
import IStudentsRepository from '@repositories/classes.interfaces/istudents.repository';
import Students from '@db/models/students.model';

export default class StudentsRepository extends BaseRepository implements IStudentsRepository {
    constructor({ Students }: { Students: Students }) {
        super(Students.getModel());
    }
}