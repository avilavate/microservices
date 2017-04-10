var seneca = require('seneca')();

seneca.use( './process.js' );

seneca.act( { role: 'process', cmd: 'sum', numbers: [ 1, 2, 3] }, function ( err, result ) {
  console.log( result );
} )