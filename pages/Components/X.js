import React from 'react'
import Y from './Y';

export default function X(px) {
    console.log(px);
    return (
        <>
           <div>X Component {px.name21}</div>
           <Y name22="Yes Getting" msgy={px.mmmmmsg}></Y>
        </>
    )
}
