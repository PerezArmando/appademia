import StudentsRepository from '@repositories/students.repository';

interface Dependencies {
    studentsRepository: StudentsRepository
};

export default class StudentsService {
    private _studentsRepository: StudentsRepository;

    constructor({ studentsRepository }: Dependencies) {
        this._studentsRepository = studentsRepository;
    }
}