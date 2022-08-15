import Course from '../models/Course.js';
import { mutipleMongooseToObject } from '../../util/mongoose.js';

// const Course = require('../models/Course');
// const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

export default SiteController;
