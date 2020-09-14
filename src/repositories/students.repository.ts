import { ModelCtor } from 'sequelize/types';

import BaseRepository from '@repositories/base.repository';
import IStudentsRepository from '@repositories/classes.interfaces/istudents.repository';

export default class StudentsRepository extends BaseRepository implements IStudentsRepository {
    constructor({ Students }: { Students: ModelCtor<any> }) {
        super(Students);
    }
}