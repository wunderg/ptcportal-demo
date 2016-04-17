export default {
  post(req, res) {
    console.log('User', req.body);
    res.json({ success: true });
  }
};
