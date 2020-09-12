import IClassesControllerDependencies from '@controllers/dependencies.interfaces/iclasses.controller.dependencies';
import IClassesController from '@controllers/classes.interfaces/iclasses.controller';

export default class ClassesController implements IClassesController {
    constructor({  }: IClassesControllerDependencies) {}
    
    public getClassesByCategory(categoryId: number) {
        throw new Error("Method not implemented.");
    }
}