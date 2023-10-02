
//1. Import area
import React from 'react'
import B from './B'


//Defination Area
export default function A(props) {

    console.log(props);

  return (
    
    <>
      <div>A Component {props.name} </div>

      <B name2="Sumit" msg={props.msg}> </B>

    </>
  )
}
