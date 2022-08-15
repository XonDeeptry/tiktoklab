import newsRouter from './news.js';
import meRouter from './me.js';
import coursesRouter from './courses.js';
import siteRouter from './site.js';

// const newsRouter = require('./news');
// const meRouter = require('./me');
// const coursesRouter = require('./courses');
// const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

export default route;
