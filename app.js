const express = require('express');

const {logIntercepter} = require('./middleware/logMiddleware');
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');

const app = express();

app.use(express.static('./public/'))
app.use(express.json());
app.use(logIntercepter);

app.use('/api/user', userRoute);
app.use('/api/post', postRoute);

app.listen(3000);
