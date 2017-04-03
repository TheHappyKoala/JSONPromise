/**
 * Darrell Huffman, 2017-04-02
 **/

export default function ( url ) {

  /**
   * Create a script element
   * 
   * Params:
   *
   * url (string)
   * callback (string)
   **/
  
  this.createScript = ( url, callback ) => {
    
    const script = document.createElement('script');
    script.src = url + callback;
    
    return script;
    
  };
  
    /**
   * Remove a script element from the DOM
   * 
   * Params:
   *
   * script (DOM node)
   **/
  
  this.removeScript = ( script ) => {
    
    script.parentNode.removeChild( script );
    
  };
  
    /**
   * Error message that is passed if the promise is rejected
   **/
  
  this.error = new Error( 'The requested script failed to load.' );
  
  return new Promise( ( resolve, reject ) => {
  
   /**
    * Create a name for the JSONP callback function
    **/
    
    const callback = 'fn' + Date.now();
   
   /**
    * Bolt the callback to the window object
    **/
    
    window[ callback ] = ( JSON ) => {
    
    /**
      * Pass the JSON data if the promise was resolved
      **/
      
      resolve( JSON );
      
    /**
      * Tidy up by deleting the callback from the window object
      **/
      
      delete window[ callback ];
      
    };
    
   /**
    * Create the script 
    *
    * If the script fails to load, the promise is rejected and the error is passed
    *
    * If the script loads successfully, it is removed thereafter so as to keep the DOM tidy
    **/
    
    const script = this.createScript( url, callback );
        
    script.addEventListener( 'error', () => {
      
      reject( this.error );
      
    }, false );
        
    script.addEventListener( 'load', () => {

      this.removeScript( script );
      
    }, false );
    
   /**
    * Append the script to the document.head
    **/

    document.head.appendChild( script );
        
  } );
  
};
