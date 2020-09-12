import express from 'express';

import diContainer from 'di.container';
import IClassesCategoriesController from '@controllers/classes.interfaces/iclasses.categories.controller';

const router = express.Router();
const classesCategoriesController: IClassesCategoriesController = diContainer.resolve('classesCategoriesController');

router.post('/', async (req, res) =>
    res.json(await classesCategoriesController.getCategoriesAndClassesAsync(req.body.query)));

export default router;