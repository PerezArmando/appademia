export default interface IStudentsController {
    getStudentByIdAsync(id: number, query: string): any;
}