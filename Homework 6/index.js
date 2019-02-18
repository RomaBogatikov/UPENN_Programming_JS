var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');

function findToy(req, res) {
    var query = {};

    if (req.body.id) query.id = req.body.id;
    console.log(query);

    if (Object.keys(query).length != 0) {
        Toy.find( query, (err, toys) => {
            if (err) {
                res.type('html').status(500);
                res.send("Error: " + err);
            }
            else {
                res.render('toys', { toys: toys });
            }
        } );
    }
};

app.use('/findToy', (req, res) => {
    findToy(req, res);
})

app.use('/createToy', (req, res) => {
    console.log(req.body);
    var newToy = new Toy(req.body);
    newToy.save( (err) => {
        if (err) {
            res.type('html').status(500);
            res.send('Error: ' + err);
        }
        else {
            res.render('created', { newToy: newToy });
        }
    });
});

app.use('/findToyAPI', (req, res) => {
    var query = {};
    if (req.query.id) query.id = req.query.id;

    if (Object.keys(query).length != 0) {
        Toy.find(query, (err, toys) => {
            if (!err) {
                res.json(toys);
            }
            else {
                console.log(err);
                res.json({});
            }
        })
    }
    else res.json({});
})


app.use('/public', express.static('files'));

app.use('/', (req, res) => { res.redirect('/public/main.html'); } );

app.listen(3000,  () => {
	console.log('Listening on port 3000');
});


