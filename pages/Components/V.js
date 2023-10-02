import React from 'react'
import W from './W';

export default function V(pv) {
    console.log(pv);
    return (
        <>
           <div>V Component {pv.name19}</div>
           <W name20="Wonderfull" mmmmsg={pv.mmmsg}></W>
        </>
    )
}
