import { Model } from "sequelize";

export default class BaseRepository {
    constructor(private _model: any) {}

    public async getByIdAsync(id: number) {
        return await this._model.findOne({ where: { id: id } });
    }
}