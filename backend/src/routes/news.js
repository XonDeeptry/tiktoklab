import express from 'express';
import NewsController from '../app/controllers/NewsController.js';

const newsRouter = express.Router();

const newsController = new NewsController();

newsRouter.get('/:slug', newsController.show);
newsRouter.get('/', newsController.index);

export default newsRouter;
