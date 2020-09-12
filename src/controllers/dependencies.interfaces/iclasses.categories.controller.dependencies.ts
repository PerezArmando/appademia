import IClassesCategoriesService from '@services/classes.interfaces/iclasses.categories.service';
import IClassesCategoriesRepository from '@repositories/classes.interfaces/iclasses.categories.repository';

export default interface IClassesCategoriesControllerDependencies {
    classesCategoriesService: IClassesCategoriesService;
    classesCategoriesRepository: IClassesCategoriesRepository;
}