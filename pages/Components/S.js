import React from 'react'
import T from './T';

export default function S(ps) {
    console.log(ps);
    return (
        <>
           <div>S Component {ps.name16}</div>
           <T name17="TargetTime" msssssg={ps.mssssg}></T>
        </>
    )
}
