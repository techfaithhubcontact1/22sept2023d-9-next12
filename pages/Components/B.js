import React from 'react'
import C from './C'

export default function B(pprr) {
    console.log(pprr);
  return (
    <>
       <div>B Component {pprr.name2}</div>
       <C name3="Blessed" msg={pprr.msg}>  </C>
    </>
  )
}
