import BaseRepository from '@repositories/base.repository';
import IClassesCategoriesRepository from '@repositories/classes.interfaces/iclasses.categories.repository'
import ClassesCategories from '@db/models/classes.categories.model';
import Classes from '@db/models/classes.model';

export default class ClassesCategoriesRespository extends BaseRepository implements IClassesCategoriesRepository {
    private _classesCategoriesModel: any;
    private _classes: any;
    
    constructor({ ClassesCategories, Classes }: { ClassesCategories: ClassesCategories, Classes: Classes }) {
        super(ClassesCategories.getModel());

        this._classes = Classes.getModel();

        // model relationships.
        this._classesCategoriesModel = ClassesCategories.getModel();
        this._classesCategoriesModel.hasMany(this._classes, { foreignKey: 'classes_categories_id' });
    }

    public async getCategoriesAndClassesAsync() {
        return await this._classesCategoriesModel.findAll({ include: this._classes });
    }
}