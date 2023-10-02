import React from 'react'
import F from './F';

export default function E(pe) {
    console.log(pe);
  return (
    <>
       <div>E Component {pe.skills}</div>
       <F name4="surehs" msg={pe.msg}></F>
    </>
  )
}
