import studentsRouter from '@routes/controllers-routes/students.routes';

const setupRoutes = (app: any) => {
    app.use('/students', studentsRouter)
};

export default setupRoutes;