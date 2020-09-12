import express from 'express';
import studentsRouter from '@routes/controllers.routes/students.routes';
import studentsCategories from '@routes/controllers.routes/students.categories';

const setupRoutes = (app: any) => {
    app.use(express.json());
    app.use(express.urlencoded());
    
    app.use('/api/students', studentsRouter);
    app.use('/api/classes/categories', studentsCategories);
};

export default setupRoutes;