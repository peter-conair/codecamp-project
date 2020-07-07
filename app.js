const express = require('express');
const mongoose = require('mongoose');

const { logIntercepter } = require('./middleware/logMiddleware');
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');

const app = express();

// connect to local database
mongoose.connect("mongodb://127.0.0.1:27017/codecamp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log("Successfully connect to MongoDB."))
    .catch(err => console.error("Connection error", err));

// connect to Atlast DB
/*mongoose.connect('mongodb+srv://dbuser02:dbuser02@cluster0-z4eg1.gcp.mongodb.net/codecamp?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}); */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public/'))

app.use(logIntercepter);

app.use('/api/user', userRoute);
app.use('/api/post', postRoute);

app.listen(3000);
