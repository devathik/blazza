

import express from 'express';
import cors from 'cors';
import path from 'path';
import env from '@/config/env';
import router from './routes/routes';
import { globalErrorHandler } from './middlewares/errors/globalErrorHandler';
import { notFound } from './middlewares/notFound/notFound';



const app = express();

// Serve static files
const publicDir = path.resolve(process.cwd(), 'public');
app.use(express.static(publicDir));

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// application routes
app.use("/api/v1", router);

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: `Successfully Server Started in ${env.port}`,
    });
});


// Global Error Handler
app.use(globalErrorHandler);

//Not Found Error Handler
app.use(notFound);

export default app;