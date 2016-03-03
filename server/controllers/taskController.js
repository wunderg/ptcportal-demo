import Task from './taskModel';

export default {
  get(req, res) {
    Task
      .find({})
      .exec()
      .then(task => res.json(task));
  },

  post(req, res) {
    const { _id, text, completed } = req.body;

    if (_id) {
      Task
      .findById(_id)
      .then(result => {
        result.completed = !result.completed;
        result.save();
        res.json(result);
      })
      .catch(err => res.json(err));
    } else {
      new Task({
        text,
        completed
      })
      .save()
      .then(result => res.json(result))
      .catch(err => res.json(err));
    }
  },

  delete(req, res) {
    Task
    .findById(req.params.id)
    .then(result => {
      result.remove();
      res.json({ removed: true });
    })
    .catch(err => res.json(err));
  }
};
