import React from 'react'
import E from './E';

export default function D(pd) {
  console.log(pd);
  return (
    <>
       <div>D Component {pd.add}</div>
       <E skills="Web Development, Software Devlopment" msg={pd.msg}></E>
    </>
  )
}
