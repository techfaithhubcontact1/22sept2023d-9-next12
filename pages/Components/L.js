import React from 'react'
import M from './M';

export default function L(pl) {
    console.log(pl);
    return (
        <>
           <div>L Component {pl.name9}</div>
           <M name10="lectures" msgg={pl.msg}></M>
        </>
    )
}
