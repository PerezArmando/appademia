import { ModelCtor } from "sequelize/types";

export default class BaseRepository {
    constructor(private _model: ModelCtor<any>) {}

    public async getByIdAsync(id: number) {
        return await this._model.findOne({ where: { id: id } });
    }
}