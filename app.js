const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));

const todoRoutes = require('./routes/todos');
const boardRoutes = require('./routes/boards');
const listRoutes = require('./routes/lists');


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/boards.html'));
});

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/board.html'));
});


app.use('/api/todos', todoRoutes);
app.use('/api/boards', boardRoutes);
app.use('/api/lists', listRoutes);

/* eslint no-console: ["error", { allow: ["log"] }] */
app.listen(3000, () => { console.log('listening on 3000'); });
