let Router = require('express').Router();
const helper = require('../helper');

Router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Baum :w00t:',
    });
});

Router.get('/all', function (req, res) {
    helper.all(req, res);
});

Router.get('/achievement', function (req, res) {
    res.json({
       status: 'B',
       message: 'Baum :w00t:',
    });
});

module.exports = Router;