import React from 'react'
import V from './V'

export default function U(pu) {
    console.log(pu)
    return (
        <>
           <div>U Component {pu.name18}</div>
           <V name19="MyVission" mmmsg={pu.mmsg}></V>
        </>
    )
}
