# JSONPromise
Promise-based JSONP API

<h2>Usage</h2>

We will use the Astro-Phys.com Ephemeris API to query for state of mars at January 20th, 1000AD:

```

import JSONP from './jsonp';

JSONP( 'http://www.astro-phys.com/api/de406/states?date=1000-1-20&bodies=mars&callback=' )
  .then( data => console.log( data ) )
  .catch( error => console.log( error ) );

  
```



