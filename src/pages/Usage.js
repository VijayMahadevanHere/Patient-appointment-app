import React,{useState,useEffect, useReducer} from "react";
import setState from "../Reducers/usageReducers";
  import { TYPE } from "../Reducers/usageReducers";

const initalState={
  value:0,
  color:'white'
}


const Usage=()=>{

   const [state,dispatch]= useReducer(setState,initalState)
  // const [color,setColor]=useState('white')
const [boom,setBoom]=useState(false)
  useEffect(()=>{
    setBoom(false)
  const id= setTimeout(() => {
    setBoom(true)
   },state.value*1000);
    return ()=>{
     clearTimeout(id)
    }
  },[state.value])
    return(
        <div >
            <button onClick={
              ()=>{
                dispatch({
                 type: TYPE.CHANGE_VALUE,
                 payload:1
                })
              }
            }>+</button>
            <label style={{background:state.color}}>{state.value}</label>
            <button onClick={
             ()=>{
              dispatch({
                type: TYPE.CHANGE_VALUE,
               payload: -1
              })
            }
            }>-</button>

           <button onClick={ ()=>{
                dispatch({
                  type: TYPE.CHANGE_COLOR,
                 payload:'blue'
                })
              }}>Blue</button>
           <button onClick={ ()=>{
                dispatch({
                  type: TYPE.CHANGE_COLOR,
                 payload:'green'
                })
              }}>Green</button>

          
          {boom && state.value ? (<span style={{background:'red'}}>Boom</span>) : null}
          
        </div>

    
    )
}
export default Usage;