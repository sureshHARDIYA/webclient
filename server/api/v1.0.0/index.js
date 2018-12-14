import express from 'express';
import authenticate, { injectUserToReq } from '@server/helpers/auth';
import Auth from './auth';
import User from './user';

export default (app) => {
  const authenticateRouter = express.Router();
  const unauthenticateRouter = express.Router();

  unauthenticateRouter.get('/auth', Auth.index);
  unauthenticateRouter.post('/auth/signin', Auth.signin);
  unauthenticateRouter.post('/auth/signup', Auth.signup);

  authenticateRouter.get('/users', User.index);
  authenticateRouter.put('/users/:uuid', User.update);

  app.use('/api/v1.0.0', injectUserToReq, unauthenticateRouter);
  app.use('/api/v1.0.0', authenticate, authenticateRouter);
};
