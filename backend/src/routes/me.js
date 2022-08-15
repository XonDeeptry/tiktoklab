import express from 'express';
import MeController from '../app/controllers/MeController.js';

// const express = require('express');
const router = express.Router();

// const meController = require('../app/controllers/MeController');
const meController = new MeController();

router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);

export default router;
