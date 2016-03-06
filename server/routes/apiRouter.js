import StudentController from '../controllers/students/studentsController';

module.exports = (app, express) => {
  var apiRouter = new express.Router();

  app.use('/api', apiRouter);

  apiRouter.get('/students', StudentController.get);
  apiRouter.post('/student', StudentController.post);
  apiRouter.delete('/student/:id', StudentController.delete);
};
