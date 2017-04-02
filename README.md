# JSONPromise
Promise-based JSONP API

<h2>Usage</h2>

import JSONP from './JSONP';

JSONP( 'myurl' )
  .then( ( data ) => alert( data ) )
  .catch( ( error ) => alert( error ) );

