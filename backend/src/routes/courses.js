import express from 'express';
import CourseController from '../app/controllers/CourseController.js';

const courseController = new CourseController();

// const express = require('express');
const coursesRouter = express.Router();

// const courseController = require('../app/controllers/CourseController');

coursesRouter.get('/create', courseController.create);
coursesRouter.post('/store', courseController.store);
coursesRouter.get('/:id/edit', courseController.edit);
coursesRouter.put('/:id', courseController.update);
coursesRouter.patch('/:id/restore', courseController.restore);
coursesRouter.delete('/:id', courseController.destroy);
coursesRouter.delete('/:id/force', courseController.forceDestroy);
coursesRouter.get('/:slug', courseController.show);

export default coursesRouter;
