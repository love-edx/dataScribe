import { Router } from 'express';
import system from './routes/system';
import workspace from './routes/workspace';

// guaranteed to get dependencies
export default () => {
  const app = Router();
  workspace(app);
  system(app);
  return app;
};
