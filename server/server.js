const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

// Route includes
const taskRouter = require('./routes/task.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/task', taskRouter);

const PORT = 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});