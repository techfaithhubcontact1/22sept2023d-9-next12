import React from 'react'
import X from './X';

export default function W(pw) { 
    console.log(pw);
    return (
        <>
           <div>W Component {pw.name20}</div>
           <X name21="Xnumbers" mmmmmsg={pw.mmmmsg}></X>
        </>
    )
}
