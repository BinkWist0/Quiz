const router = require('express').Router();

const { User } = require('../db/models');

const Rega = require('../components/Rega');

router.get('/registration', (req, res) => {
  const html = res.renderComponent(Rega, {
    title: 'Rega',
  });
  res.send(html);
});

router.post('/registration', async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      await User.create({ name, score: 0 });
      res.app.locals.user = name;
      res.redirect('/');
    } else {
      res.status(400).send('заполните все поля');
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});
module.exports = router;
