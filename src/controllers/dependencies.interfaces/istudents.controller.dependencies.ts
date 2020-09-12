import IStudentsService from '@services/classes.interfaces/istudents.service';
import IStudentsRepository from '@repositories/classes.interfaces/istudents.repository';

export default interface IStudentsControllerDependencies {
    studentsService: IStudentsService,
    studentsRepository: IStudentsRepository
};