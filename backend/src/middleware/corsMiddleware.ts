import cors from 'cors';
import { RequestHandler } from 'express';

function configureCors(): RequestHandler {
  return cors({
    origin: /^http:\/\/localhost:\d+$/,
    allowedHeaders: '*',
    optionsSuccessStatus: 200,
    credentials: true,
  });
}

export default configureCors;
