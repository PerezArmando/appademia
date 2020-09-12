import BaseRepository from '@repositories/base.repository';
import IClassesRepository from '@repositories/classes.interfaces/iclasses.repository';
import ClassesCategories from '@db/models/classes.categories.model';
import Classes from '@db/models/classes.model';

export default class ClassesRepository extends BaseRepository implements IClassesRepository {
    constructor({ Classes, ClassesCategories }: { Classes: Classes, ClassesCategories: ClassesCategories }) {
        super(Classes.getModel());

        // model relationships.
        Classes.getModel().hasOne(ClassesCategories.getModel());
    }
}