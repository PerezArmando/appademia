export default interface IClassesCategoriesRepository {
    getCategoriesAndClassesAsync(): any;
    getCategoryAndClassesByIdAsync(id: number): any;
}