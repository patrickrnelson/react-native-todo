const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Route includes
const taskRouter = require('./routes/task.router');

app.use('/api/task', taskRouter);

const PORT = 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});