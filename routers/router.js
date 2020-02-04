const express = require('express'),
    router = express.Router();

router.get('/', function (req, res, next) {
    var jresp = { 'test': 'Pruebas con Webix' }
    res.render('login/index', jresp);
});

module.exports = router;