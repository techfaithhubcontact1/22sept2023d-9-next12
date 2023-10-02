import React from 'react'
import P from './P';

export default function O(po) {
    console.log(po);
    return (
        <>
           <div>O Component {po.name12}</div>
           <P name13="Powrefull" msggggg={po.msgggg}></P>
        </>
    )
}
