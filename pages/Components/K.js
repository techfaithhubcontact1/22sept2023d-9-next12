import React from 'react'
import L from './L';

export default function K(pk) {
    console.log(pk);
    return (
        <>
            <div>K Component {pk.name8}</div> 
            <L name9="Harsh" msg={pk.msg}></L>
        </>
    )
}
