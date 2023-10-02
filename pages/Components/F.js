import React from 'react'
import G from './G';

export default function F(pf) {
    console.log(pf);
  return (
    <>
       <div>F Component {pf.name4}</div>
       <G name5="Rakesh" msg={pf.msg}></G>

    </>
  )
}
