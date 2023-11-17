const express = require('express');
const router = express.Router();


const { Theme } = require('../db/models');
const Main = require('../components/pages/Main');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll();

    const html = res.renderComponent(Main, {
      title: 'Main',
      themes,
    });

    res.status(200).send(html);
  } catch ({ message }) {
    res.status(500).send(message);
  }
});

module.exports = router;
