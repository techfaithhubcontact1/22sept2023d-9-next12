import React from 'react'
import N from './N';

export default function M(pm) {
    console.log(pm);
    return (
        <>
           <div>M Component {pm.name10}</div>
           <N name11="neelam" msggg={pm.msgg}></N>
        </>
    )
}
