
//1. Import area
import React from 'react'
import D from './D';
 

//2. defination area
export default function C(ppp) {

     console.log(ppp);
    return (
       <>
          <div>C Component {ppp.name3} {ppp.msg} </div>
          <D add="Indore MP" msg={ppp.msg}></D>  
       </>
    )
}
