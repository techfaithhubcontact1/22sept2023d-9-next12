import React from 'react'
import Z from './Z';

export default function Y(py) {
    console.log(py);
    return (
         <>
            <div>Y Component {py.name23}</div>
            <Z name23="We got succefully" msgz={py.msgy}></Z>
         </>
    )
}
