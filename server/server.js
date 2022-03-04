const express = require( 'express' );
const app = express();
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
const fs = require( 'fs' );
var fileUpload = require('express-fileupload');

app.use(fileUpload({}));
const PORT = process.env.PORT || 5000;


app.get( "/", ( req, res ) => {
   console.log( 'GET' );
   fs.readFile( './test.js', 'utf8', ( err, data ) => {
      if ( err ) {
         console.log( err );
         res.send( 'err' );
         return;
      }
      res.send( data );
   } )
} );

app.post( "/test", ( req, res ) => {
   console.log( 'POST' );
   console.log( req.files );
   res.send('ok')
} );


app.listen( PORT, () => console.log( `Server started ${ PORT }...` ) );