import { Request, Response, NextFunction } from 'express';

function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction): void {
  console.error('An error occurred:', err);
  res.status(500).json({ error: 'Internal Server Error' });
}

export default errorMiddleware;
