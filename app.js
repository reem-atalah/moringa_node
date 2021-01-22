const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
require('dotenv/config');
const port = process.env.PORT || 7070;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

//body-parser middleware
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

//flash messages middleware
app.use(require('connect-flash')());
app.use((req, res, next) => {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    return res.render('index', {
        title: "Home",
        css: "indexStyle"
    })
});

app.use('/index', require('./routes/index'));
app.use('/contact_us', require('./routes/contact'));
app.use('/about_us', require('./routes/about_us'));
app.use('/certificate', require('./routes/certificate'));
app.use('/moringa_benefits', require('./routes/moringa_benefits'));
app.use('/thankyou', require('./routes/thankyou'));
app.use('/visit', require('./routes/visit'));
app.use('/dates', require('./routes/dates'));

app.listen(port, err => {
    if (err) return console.log(err);
    console.log(`server started listening at ${port}`);
});