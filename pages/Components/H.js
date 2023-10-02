import React from 'react'
import I from './I';

export default function H(ph) {
    console.log(ph);
  return (
    <>
       <div>H Component {ph.name6}</div>
       <I name6="Mukesh" msg={ph.msg}></I>
    </>
  )
}
