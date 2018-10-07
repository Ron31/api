let Router = require('express').Router();
const helper = require('../imagehelper');

Router.get('/', function (req, res) {
    // TODO: return all image endpoints
    res.json({
       status: 'API Its Working',
       message: 'Baum :w00t:',
    });
});

// TODO: more image endpoints
Router.post('/achievement', async function (req, res) {
    let picture = await helper.achievement(req.body.image, req.body.achievment);
    res.json({
        status: 'Working!',
        message: 'Maum',
        data: picture
    });
});

module.exports = Router;