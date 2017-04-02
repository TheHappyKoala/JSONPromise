# JSONPromise
Promise-based JSONP API

<h2>Usage</h2>

<code style="background: '#d8d8d8'">

import JSONP from './JSONP';



JSONP( 'myurl' )

  .then( ( data ) => alert( data ) )
  
  .catch( ( error ) => alert( error ) );

</code>
