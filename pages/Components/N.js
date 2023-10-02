import React from 'react'
import O from './O';

export default function N(pn) {
    console.log(pn);
    return (
        <>
           <div>N Component {pn.name11}</div>
           <O name12="Olaces" msgggg={pn.msggg}></O>
        </>
    )
}
