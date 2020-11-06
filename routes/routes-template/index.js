const express = require( 'express' );
const router = express.Router();
const { controller }  = require('./../../controllers/index');


router.all( '/', controller, ( req, res ) => {
  res.send( { message : 'Hello from Express!!' } );
} );

module.exports = router;
