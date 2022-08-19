import mongoose from 'mongoose';
// const mongoose = require('mongoose');

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/labs_tiktok_dev', {});
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect to database failure!!! errror code: ', error);
    }
}
