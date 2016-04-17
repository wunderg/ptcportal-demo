export default {
  post(req, res) {
    console.log('User', req.body);
    res.json({ id_token: 1234567890 });
  }
};
