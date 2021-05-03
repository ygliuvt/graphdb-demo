const express = require('express');
const router = express.Router();
const https = require('https');
const dataset = require('../models/dataset');

/* GET datasets listing. */
router.get('/', async (req, res, next) => {
    let ds = await dataset.getDatasets();
    res.format({
        html: function () {
            res.render('datasets/datasets', { datasets: ds});
        }
    })
});

router.get('/connect/:concept1/:concept2', async (req, res, next) => {
    let source = req.params["concept1"];
    let d = await dataset.connectDatasets(source, req.params["concept2"]);
    let ds = await dataset.getConnections(source);
    res.format({
        html: function () {
            res.render('datasets/connections', { source: source, datasets: ds});
        },

        json: function () {
            res.json('')
        }
    })
})

module.exports = router;
