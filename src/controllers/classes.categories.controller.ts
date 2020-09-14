import { graphql } from 'graphql';

import IClassesCategoriesController from '@controllers/classes.interfaces/iclasses.categories.controller';
import { classCategorySchema, classesCategoriesSchema } from '@graphql/classes.categories.schema';
import IClassesCategoriesControllerDependencies from '@controllers/dependencies.interfaces/iclasses.categories.controller.dependencies';
import IClassesCategoriesRepository from '@repositories/classes.interfaces/iclasses.categories.repository';

export default class ClassesCategoriesController implements IClassesCategoriesController {
    private _classesCategoriesRepository: IClassesCategoriesRepository;

    constructor({ classesCategoriesRepository }: IClassesCategoriesControllerDependencies) {
        this._classesCategoriesRepository = classesCategoriesRepository;
    }

    public async getCategoriesAndClassesAsync(query: string) {
        return graphql(
            classesCategoriesSchema, query,
            {
                results: await this._classesCategoriesRepository.getCategoriesAndClassesAsync()
            });
    }

    public async getCategoriesAndClassesByIdAsync(id: number, query: string) {
        const classesCategory = await this._classesCategoriesRepository.getCategoryAndClassesByIdAsync(id);
        return graphql(classCategorySchema, query, classesCategory);
    }
}