import express from 'express';
import SiteController from '../app/controllers/SiteController.js';
// const express = require('express');
const siteRouter = express.Router();
// const siteController = require('../app/controllers/SiteController');

const siteController = new SiteController();

siteRouter.get('/search', siteController.search);
siteRouter.get('/', siteController.index);

export default siteRouter;
