'use strict'
const   Router              =   require('koa-router'),
        router              =   new Router(),
        { AuthController }  = require('../controllers');


router.post( '/api/register', AuthController.register );

module.exports = router;