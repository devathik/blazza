import mongoose from 'mongoose';
import env from './config/env';
import app from './app';

const connectDatabase = async () => {
    try {
        await mongoose.connect(env.connection_string as string);
        console.log('Mongoose Connected to Atlas Database:', mongoose.connection.name, 'on host:', mongoose.connection.host);
        return;
    } catch (err: any) {
        console.error('Mongoose Atlas Connection Error:', err.message || err);
        console.log('Attempting connection to local MongoDB fallback...');

        try {
            await mongoose.connect('mongodb://localhost:27017/dokan-lagbe');
            console.log('Mongoose Connected to local MongoDB fallback:', mongoose.connection.name, 'on host:', mongoose.connection.host);
            return;
        } catch (localErr: any) {
            console.error('Mongoose Local Fallback also failed:', localErr.message || localErr);
            throw new Error('MongoDB connection failed for both Atlas and local fallback');
        }
    }
};

const mainServer = async () => {
    await connectDatabase();

    app.listen(env.port, () => {
        console.log('Server listening on port ', env.port);
    });
};

mainServer().catch((err) => {
    console.error('Server startup failed:', err.message || err);
    process.exit(1);
});