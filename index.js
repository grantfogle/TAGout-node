const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8008;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    // res.send('It worked');
    res.render('home');
});

app.post('/results', (req, res) => {
    const { species, sex, method, unit } = req.body;
    // let's get puppeteer setup
    // make async call
    console.log(species, sex, method, unit);
    res.render('home', {
        results: []
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})