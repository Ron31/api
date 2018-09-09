let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Baum :w00t:',
    });
});

router.get('/all', function (req, res) {
    res.json({
       status: 'A',
       message: 'Baum :w00t:',
    });
});

router.get('/get', function (req, res) {
    res.json({
       status: 'B',
       message: 'Baum :w00t:',
    });
});

module.exports = router;