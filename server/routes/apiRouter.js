import passport from 'passport';

import StudentController from '../controllers/students/studentsController';
import UserController from '../controllers/user/userController.js';

import '../services/passport.js';

const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app, express) => {
  var apiRouter = new express.Router();

  app.use('/api', apiRouter);

  apiRouter.use((req, res, next) => {
    console.log('API CALL');
    next();
  });

  // apiRouter.param('id', (req, res, next, id) => {
  //   //validate user or check some data
  //   next();
  // });

  apiRouter.post('/login', requireSignin, UserController.signin);
  apiRouter.post('/signup', UserController.signup);
  apiRouter.get('/students', StudentController.get);
  apiRouter.post('/student', StudentController.post);
  apiRouter.delete('/student/:id', StudentController.delete);
};
