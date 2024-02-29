// Library use
import express, { Application, Request, Response, NextFunction } from 'express';
import admin from "firebase-admin"
import bodyParser from 'body-parser';
import configureCors from './middleware/corsMiddleware';
import errorMiddleware from './middleware/errorMiddleware';
import dotenv from "dotenv"

// Exported module use
import firebaseCredentials from './config/credentials';
import patientRoutes from './routes/patientRoute';
import treatmentDescriptionRoute from './routes/treatmentDescriptionRoute'
import medicationsPrescribedRoute from './routes/medicationsPrescribedRoute'


// Read .env file
dotenv.config()


// Initialisation app express
const app: Application = express();

// Middleware use
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(configureCors());

// Routes use
app.use('/patient', patientRoutes);
app.use('/treatment-description', treatmentDescriptionRoute);
app.use('/medications-prescribed', medicationsPrescribedRoute);


// Error handling middleware for internal error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorMiddleware(err, req, res, next);
});

// Start server at PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
