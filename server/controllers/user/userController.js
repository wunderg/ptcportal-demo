
export default {
  signin(req, res) {
    console.log('User', req.body);
    res.json({ id_token: 1234567890 });
  },

  signup(req, res) {
  }
};
