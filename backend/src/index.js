import { engine } from 'express-handlebars';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import methodOverride from 'method-override';
import route from './routes/index.js';
import { connect as db } from './config/db/index.js';

// const path = require('path');
// const express = require('express');
// const morgan = require('morgan');
// const methodOverride = require('method-override');
// Sử dụng cách import = ES6 với phiên bản handlebars mới hơn. Cách import thông qua nodejs gây ra lỗi
// const {  } = require('express-handlebars');

// const route = require('./routes');
// const db = require('./config/db');

// Connect to DB
db();

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        // khởi tạo bổ sung thêm một function helpers cho handlerbars
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
