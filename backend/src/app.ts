import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import configureCors from './middleware/corsMiddleware';
import errorMiddleware from './middleware/errorMiddleware';
import patientRoutes from './routes/patientRoute';

const app: Application = express();

// Middleware
app.use(bodyParser.json());
app.use(configureCors());

// Routes
app.use('/patient', patientRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorMiddleware(err, req, res, next);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
