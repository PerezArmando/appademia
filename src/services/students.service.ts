import IStudentsRepository from '@repositories/classes.interfaces/istudents.repository';
import IStudentsService from '@services/classes.interfaces/istudents.service';
import IStudentsServiceDependencies from '@controllers/dependencies.interfaces/istudents.controller.dependencies';

export default class StudentsService implements IStudentsService {
    private _studentsRepository: IStudentsRepository;

    constructor({ studentsRepository }: IStudentsServiceDependencies) {
        this._studentsRepository = studentsRepository;
    }
}