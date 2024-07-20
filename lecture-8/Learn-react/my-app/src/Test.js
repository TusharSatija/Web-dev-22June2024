import React, { useEffect, useState } from 'react'


const Test = () => {
    const [data,setdata]=useState(0);
    const [dec,setdec]=useState(0);
  
  //case-1
    // useEffect(()=>{
    //     console.log("inside useEfeect");
    // })

    // case-2  runs only once
    // useEffect(()=>{
    //     console.log("inside useEfeect");   
    // },[]);


    //case3
    useEffect(()=>{
        console.log("inside useEffect");
    },[dec]);
    console.log("this is oustide useffect");
    return (
    <div>
        <h1>data : {data}</h1>
        <button onClick={()=>{setdata(data+1)}}>increment</button>
        <button onClick={()=>{setdec(dec-1)}}>decrement</button>
    </div>
  )
}

export default Test