import IClassesServiceDependencies from '@controllers/dependencies.interfaces/iclasses.controller.dependencies';
import IClassesService from '@services/classes.interfaces/iclasses.service';

export default class ClassesService implements IClassesService {
    constructor({}: IClassesServiceDependencies) {
    }
}