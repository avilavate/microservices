module.exports = function( options ) {
  var seneca = this;

  seneca.add( { role:'process', cmd:'sum' }, sum );

  function sum ( args, done ) {
    var numbers = args.numbers;

    var result = numbers.reduce( function( a, b ) { 
      return a + b; 
    }, 0);

    done( null, { result: result } );
  }
}