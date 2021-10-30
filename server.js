const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

//tell mongoose which database to connect too... if .env exists with MONGODB_URI (like heroku) OR local MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
    //mongoose config options, https://mongoosejs.com/docs/connections.html#options
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
