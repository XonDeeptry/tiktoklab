import mongoose from 'mongoose';

async function connect() {
    console.log('entered connect database function');
    try {
        await mongoose.connect('mongodb://localhost:27017/labs_tiktok_dev');
        console.log('Connected to MongoDB');
    } catch (e) {
        console.log('Failed to connect to MongoDB ', e);
    }
}

export default connect;
