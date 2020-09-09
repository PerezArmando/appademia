import IStudentsRepository from '@repositories/interfaces/istudents.repository';
import IStudentsService from '@services/interfaces/istudents.service';

interface Dependencies {
    studentsRepository: IStudentsRepository
};

export default class StudentsService implements IStudentsService {
    private _studentsRepository: IStudentsRepository;

    constructor({ studentsRepository }: Dependencies) {
        this._studentsRepository = studentsRepository;
    }
}