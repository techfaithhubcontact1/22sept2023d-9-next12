import React from 'react'
import S from './S';

export default function R(pr) {
    console.log(pr);
    return (
       <>
           <div>R Component {pr.name15}</div>
           <S name16="SunRise" mssssg={pr.msssg}></S>
       </>

    )
}
