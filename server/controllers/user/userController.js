import User from '../../models/userModel.js';

export default {
  signin(req, res) {
    console.log('User', req.body);
    res.json({ id_token: 1234567890 });
  },

  signup(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }, (err, user) => {
      if (err) {
        return next(err);
      }

      if (user) {
        return res.status(422).send({ error: 'User already exist' });
      }

      if (!email || !password) {
        res.status(422).send({ error: 'Must provide email and password' });
      }

      var newUser = new User({
        email,
        password
      });

      newUser.save(err2 => {
        if (err2) {
          next(err);
        }

        res.json({ user });
      });
    });
  }
};
