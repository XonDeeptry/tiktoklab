import Course from '../models/Course.js';
import { mutipleMongooseToObject } from '../../util/mongoose.js';

// const Course = require('../models/Course');
// const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    // Khởi tạo một
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    // Truyền courses vào hbs.
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch((err) => next(err));
        // Có thể viết dưới dạng do next cần truyền vào một function mà error trả về bởi catch -> next sẽ nhận ngay error là đối số của nó.
        // .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

export default SiteController;
