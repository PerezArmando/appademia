import IClassesCategoriesService from '@services/classes.interfaces/iclasses.categories.service';
import IClassesCategoriesServiceDependencies from '@services/dependencies.interfaces/iclasses.categories.service.dependencies';

export default class ClassesCategoriesService implements IClassesCategoriesService {
    constructor({ classesCategoriesRepository }: IClassesCategoriesServiceDependencies) {}
}