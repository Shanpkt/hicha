import React, { useEffect } from 'react'
import "./banner.scss"
function Banner() {
    useEffect(()=>{
      
        setTimeout(()=>{
     
        },1000)

    },[])
  return (
    <div className="banner_continer">
      
       <div className='Circle_Logo'>
          <div className='logoRing_outer'>
            <div className='logoRing_inner'></div>
          </div>
          <label className='loading_Label'>...Loading</label>
       </div>
    </div>
  )
}

export default Banner