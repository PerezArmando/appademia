import { Model } from "sequelize";

export default class BaseRepository {
    constructor(private _model: any) {}

    public async getByIdAsync(id: number) {
        return await this._model.findAll({ where: { id: id } });
    }
}