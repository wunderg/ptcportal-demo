import StudentController from '../controllers/students/studentsController';

module.exports = (app, express) => {
  var apiRouter = new express.Router();

  app.use('/api', apiRouter);

  apiRouter.get('/task', StudentController.get);
  apiRouter.post('/task', StudentController.post);
  apiRouter.delete('/task/:id', StudentController.delete);
};
