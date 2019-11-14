
    import React from 'react'

    const SMA = ({ sma }) => {
        if (!sma ){
            return (
                <center><h1>Simple moving average</h1></center>
            )
        }

      return (
          
        <div>
          <center><h1>Simple moving average</h1></center>
          {
            
            Object.keys(sma).map((smaI) => (


                <div class="Symbol">
            
                    <h5 class="Symbol">{sma[smaI]}</h5>
                
                    
    
                </div>
            ))
          
          }
        </div>
      )
    };

    export default SMA