import User from '../../models/userModel.js';
import jwt from 'jwt-simple';

const token = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.email, iat: timestamp }, 'secret_goes_here');
};

export default {
  signin(req, res) {
    console.log('User', req.body);
    const email = req.body.email;
    const password = req.body.pass;

    if (!email || !password) {
      return res.status(422).send({ error: 'Must provide email and password' });
    }

    res.json({ id_token: token(req.body) });
  },

  signup(req, res, next) {
    const email = req.body.email;
    const password = req.body.pass;

    if (!email || !password) {
      return res.status(422).send({ error: 'Must provide email and password' });
    }

    User.findOne({ email }, (err, user) => {
      if (err) {
        return next(err);
      }

      if (user) {
        return res.status(422).send({ error: 'User already exist' });
      }


      var newUser = new User({
        email,
        password
      });

      console.log(newUser);
      newUser.save(err2 => {
        if (err2) {
          next(err);
        }

        res.json({ id_token: token(req.body) });
      });
    });
  }
};
