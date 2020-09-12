import express from 'express';

import diContainer from 'di.container';
import IStudentsController from '@controllers/classes.interfaces/istudents.controller';

const router = express.Router();
const studentsController: IStudentsController = diContainer.resolve('studentsController');

router.post('/', async (req, res) =>
    res.json(await studentsController.getStudentByIdAsync(req.body.id, req.body.query)));

export default router;