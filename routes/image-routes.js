let Router = require('express').Router();
const helper = require('../imagehelper');

Router.get('/', function (req, res) {
    // TODO: return all image endpoints
    res.end("Avaible endpoints: /achievement; /triggered");
});

// TODO: more image endpoints

Router.get('/achievement', async (req, res) => {
    if(!req.query.image || !req.query.achievement) return res.json({
        status: "Error!",
        message: "Please give under image an imagelink"
    });
    let picture = await helper.achievement(req.query.image, req.query.achievement);
    res.json({
        status: 'Working!',
        data: picture
    });
});

Router.get('/triggered', async function (req, res) {
    if(!req.query.image) return res.json({
        status: "Error!",
        message: "Please give under image an image imagelink"
    });
    let picture = await helper.triggered(req.query.image);
    res.json({
        status: 'Working!',
        data: picture
    });
});


module.exports = Router;