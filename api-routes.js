let router = require('express').Router();
const helper = require('./helper');

router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Baum :w00t:',
    });
});

router.get('/all', function (req, res) {
    helper.all(req, res);
});

router.get('/get', function (req, res) {
    res.json({
       status: 'B',
       message: 'Baum :w00t:',
    });
});

module.exports = router;