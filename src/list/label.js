import React, { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import './label.css'
import { Mycontext,MyNewContext } from "../pages/context";
import Toolkit from './toolkit';
import useMyhooks, { useTooltip } from '../hooks/myhooks';
import Text from './text';
const Label =(props)=>{

const myLabel=useContext(Mycontext);

const[message,setMessage]=useState();
const[showtooltip,setshowtooltip,refobj,labelref]=useTooltip();
    const isActive=props.isActive
    const style= isActive ? {background:'green'} : {background:'orange'}
 const text=isActive ? 'Active' : 'Non Active'
    
   if(myLabel===false){
    return null;
   }
    
      const handleMouseEnter=()=>{
     
        setshowtooltip(true)
      }
       const handleMouseLeave=()=>{
        setshowtooltip(false)
       }
       
        return (
            <div   className='list-name-item-container'>
        <span 
        ref={labelref}
      
         className='list-label-item'
         style={style}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         >
   
         {text}
         </span>
        <Toolkit ref={refobj} showtooltip={showtooltip} message={`This is ${text}`} />
         </div>
   ) 

}










export default Label;