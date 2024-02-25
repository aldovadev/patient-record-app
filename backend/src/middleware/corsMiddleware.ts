// Cnfiguration need tobe fix
import cors from 'cors';
import { RequestHandler } from 'express';

function configureCors(): RequestHandler {
  return cors({
    origin: 'http://example.com',
    methods: ['POST'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200,
    credentials: true,
  });
}

export default configureCors;
