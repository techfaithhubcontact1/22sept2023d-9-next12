import React from 'react'
import H from './H';

export default function G(pg) {
    console.log(pg);
  return (
     <>
        <div>G Component {pg.name5}</div>
        <H name6="rajapa" msg={pg.msg}></H>
        
     </>
  )
}
