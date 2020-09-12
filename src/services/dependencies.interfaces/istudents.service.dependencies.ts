import IStudentsRepository from '@repositories/classes.interfaces/istudents.repository';

export default interface IStudentsServiceDependencies {
    studentsRepository: IStudentsRepository
}