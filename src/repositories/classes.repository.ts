import { ModelCtor } from 'sequelize/types';

import BaseRepository from '@repositories/base.repository';
import IClassesRepository from '@repositories/classes.interfaces/iclasses.repository';

export default class ClassesRepository extends BaseRepository implements IClassesRepository {
    constructor({ Classes, ClassesCategories }: { Classes: ModelCtor<any>, ClassesCategories: ModelCtor<any> }) {
        super(Classes);

        // model relationships.
        Classes.hasOne(ClassesCategories);
    }
}