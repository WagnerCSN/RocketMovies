import { useState } from 'react';
import Child from './components/todo';

function Parent() {
  const [data, setData] = useState([]);
  
  function childToParent(childdata){
    setData(childdata);
  }

  return (
    <div className="App">
      {
        data
      }
      <div>
      <Child childToParent={childToParent}/>
      </div>
    </div>
  );
}

export default Parent;
=========================================================================================================================================================



import React from 'react'
import {useState, useEffect} from "react"


export default function Child({childToParent}) {
  const [data, setData] = useState("");
   
  useEffect(() =>{
    childToParent(data);
}, [data]);
   
    return (
        <div>
            <input 
            value={data}
            onChange={e=>setData(e.target.value)}
            ></input>
            
            <button onClick={() => childToParent(data)}>adicionar 1</button>
        </div>
    )
}