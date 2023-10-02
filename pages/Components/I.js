import React from 'react'
import J from './J';

export default function I(pi) {
    console.log(pi);
  return (
     <>
        <div>I Component {pi.name6}</div>
        <J name7='Raghu' msg={pi.msg}></J>
     </>
  )
}
