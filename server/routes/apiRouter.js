import taskController from '../controllers/taskController';

module.exports = (app, express) => {
  var apiRouter = new express.Router();

  app.use('/api', apiRouter);

  apiRouter.get('/task', taskController.get);
  apiRouter.post('/task', taskController.post);
  apiRouter.delete('/task/:id', taskController.delete);
};
