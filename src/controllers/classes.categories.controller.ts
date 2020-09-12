import { graphql } from 'graphql';

import IClassesCategoriesController from '@controllers/classes.interfaces/iclasses.categories.controller';
import classesCategoriesSchema from '@graphql/classes.categories.schema';
import IClassesCategoriesControllerDependencies from '@controllers/dependencies.interfaces/iclasses.categories.controller.dependencies';
import IClassesCategoriesRepository from '@repositories/classes.interfaces/iclasses.categories.repository';

export default class ClassesCategoriesController implements IClassesCategoriesController {
    private _classesCategoriesRepository: IClassesCategoriesRepository;

    constructor({ classesCategoriesRepository }: IClassesCategoriesControllerDependencies) {
        this._classesCategoriesRepository = classesCategoriesRepository;
    }

    public async getCategoriesAndClassesAsync(query: string) {
        const clssesCategories = { results: await this._classesCategoriesRepository.getCategoriesAndClassesAsync() };
        return graphql(classesCategoriesSchema, query, clssesCategories);
    }
}