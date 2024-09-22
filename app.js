const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000; 


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static('public'));


app.get('/', (req, res) => {
    console.log("Rendering index view");
    res.render('index');
});


app.get('/govern-home', (req, res) => {
    res.render('govern-home');
});

app.get('/gvt-report', (req, res) => {
    res.render('gvt-report');
});

app.get('/gvt-overall-report', (req, res) => {
    res.render('gvt-overall-report');
});

app.get('/gvt-energy-report', (req, res) => {
    res.render('gvt-energy-report');
});

app.get('/gvt-healthy-report', (req, res) => {
    res.render('gvt-healthy-report');
});

app.get('/gvt-plastic-report', (req, res) => {
    res.render('gvt-plastic-report');
});

app.get('/gvt-ReducingWaste-report', (req, res) => {
    res.render('gvt-ReducingWaste-report');
});

app.get('/gvt-water-report', (req, res) => {
    res.render('gvt-water-report');
});

app.get('/gvt-wetlands-report', (req, res) => {
    res.render('gvt-wetlands-report');
});


app.get('/user-login', (req, res) => {
    res.render('user-login');
});


app.use((req, res) => {
    res.status(404).render('404');
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
