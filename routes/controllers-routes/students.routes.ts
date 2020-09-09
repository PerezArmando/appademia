import express from 'express';

import diContainer from 'di.container';
import StudentsController from '@controllers/students.controller';

const router = express.Router();
const studentsController: StudentsController = diContainer.resolve('studentsController');

router.get('/:id', async (req, res) => {
    res.send(await studentsController.getStudentByIdAsync(Number(req.params.id)));
});

export default router;