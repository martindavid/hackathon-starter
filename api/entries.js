const models = require('../models');
const express = require('express');
const router = express.Router();

router.get('/latest', function(req, res) {
    models.Entries.findAll({
        attributes: ['name', 'email', 'address', 'phone', 'country', 'comments', 'competition_id'],
        limit: 3,
        order: [
            ['id', 'DESC']
        ]
    }).then(function(entries) {
        res.send(entries);
    });
});

module.exports = router;