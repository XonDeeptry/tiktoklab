import mongoose from 'mongoose';
// const mongoose = require('mongoose');

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/labs_tiktok_dev', {
            // mongoose 6 and above no longer support those 3
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect to database failure!!! errror code: ', error);
    }
}
