'use strict';
module.exports = function(app) {
    var ctrl = require('./controllers');
    const bodyParser = require('body-parser');

    app.post('/set', bodyParser.json(), (req, res) => {
        ctrl.set(req.body)
            .then(
                (data) => res.send(data),
                (error) => {
                    console.error(error)
                    res.status(500).send({
                        error: 'There was an error.'
                    })
                }
            )
    });

    app.get('/list', (req, res) => {
        ctrl.listGet().then(
            (data) => res.send(data),
            (error) => {
                console.error(error);
                res.status(500).send({
                    error: 'There was an error.'
                });
            }
        );
    });

    app.get('/list_art', (req, res) => {
        ctrl.listArt().then(
            (data) => res.send(data),
            (error) => {
                console.error(error);
                res.status(500).send({
                    error: 'There was an error.'
                });
            }
        );
    });

    app.get('/scores', (req, res) => {
        ctrl.scores().then(
            (data) => res.send(data),
            (error) => {
                console.error(error);
                res.status(500).send({
                    error: 'There was an error.'
                });
            }
        );
    });

    app.get('*', function(req, res){
        res.send({"info": "Url does not exist."}, 404);
    });
    app.post('*', function(req, res){
        res.send({"info": "Url does not exist."}, 404);
    });
};