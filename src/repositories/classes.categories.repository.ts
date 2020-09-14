import { ModelCtor } from 'sequelize/types';

import BaseRepository from '@repositories/base.repository';
import IClassesCategoriesRepository from '@repositories/classes.interfaces/iclasses.categories.repository'

export default class ClassesCategoriesRespository extends BaseRepository implements IClassesCategoriesRepository {
    private _classesCategoriesModel: any;
    private _classes: any;
    
    constructor({ ClassesCategories, Classes }: { ClassesCategories: ModelCtor<any>, Classes: ModelCtor<any> }) {
        super(ClassesCategories);

        this._classes = Classes;

        // model relationships.
        this._classesCategoriesModel = ClassesCategories;
        this._classesCategoriesModel.hasMany(this._classes, { foreignKey: 'classes_categories_id' });
    }
    
    public async getCategoriesAndClassesAsync() {
        return await this._classesCategoriesModel.findAll({ include: this._classes });
    }
    public async getCategoryAndClassesByIdAsync(id: number) {
        return await this._classesCategoriesModel.findOne(
            {
                where: { id },
                include: this._classes
            }
        );
    }
}