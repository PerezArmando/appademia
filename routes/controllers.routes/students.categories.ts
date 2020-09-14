import express from 'express';

import diContainer from 'di.container';
import IClassesCategoriesController from '@controllers/classes.interfaces/iclasses.categories.controller';

const router = express.Router();
const classesCategoriesController: IClassesCategoriesController = diContainer.resolve('classesCategoriesController');

router.post('/', async (req, res) => {
    if (req.body.id) {
        res.json(await classesCategoriesController.getCategoriesAndClassesByIdAsync(req.body.id, req.body.query));
    } else {
        res.json(await classesCategoriesController.getCategoriesAndClassesAsync(req.body.query));
    }
});

export default router;