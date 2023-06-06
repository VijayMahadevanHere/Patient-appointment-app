import React, { useDebugValue, useEffect } from 'react';
import Label from './label';
import Label2 from './label2';
import './listitem.css'
import Toolkit from './toolkit';
import { useTooltip } from '../hooks/myhooks';
const ListItem=({title,desc,isActive,onDelete,onlabelClick})=>{
  //  console.log('listitme');
// useEffect(()=>{
//   console.log('hellow'+title)
// })
const[showtooltip,setshowtooltip,refobj,labelref]=useTooltip();
useDebugValue('l',(val)=>{
  return val
})
    return (
     
     <div className='list-item'>
    
     <div className='list-title'>
       <h4>{title}</h4>
       <label  ref={labelref} onMouseEnter={()=>
         setshowtooltip(true)
       }
       onMouseLeave={()=>
         setshowtooltip(false)
       }
        onClick={onDelete}>Delete
          <Toolkit ref={refobj} showtooltip={showtooltip} message={'Delete'}/>
          </label>
     
     </div>
     <div className='list-desc'>
      {desc}
     </div>
     <div className='list-label'>
       <Label isActive={isActive} />      
     </div>
     
      </div>
    )
   }

   export default ListItem;