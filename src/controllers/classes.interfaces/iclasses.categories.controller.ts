export default interface IClassesCategoriesController {
    getCategoriesAndClassesAsync(query: string): any;
    getCategoriesAndClassesByIdAsync(id: number, query: string): any;
}