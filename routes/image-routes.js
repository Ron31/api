let Router = require('express').Router();
const helper = require('../imagehelper');

Router.get('/', function (req, res) {
    // TODO: return all image endpoints
    res.end("Avaible endpoints: /achievement; /triggered");
});

// TODO: more image endpoints
Router.post('/achievement', async function (req, res) {
    if(!req.body.image || !req.body.achievement) return res.json({
        status: "Error!",
        message: "Please give under image an image imagelink"
    });
    let picture = await helper.achievement(req.body.image, req.body.achievement);
    res.json({
        status: 'Working!',
        data: picture
    });
});

Router.post('/triggered', async function (req, res) {
    if(!req.body.image) return res.json({
        status: "Error!",
        message: "Please give under image an image imagelink"
    });
    let picture = await helper.triggered(req.body.image);
    res.json({
        status: 'Working!',
        data: picture
    });
});


module.exports = Router;