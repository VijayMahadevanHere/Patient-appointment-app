import React from 'react';
import ListItem from './litItems';
function SimpleList(props){
  // console.log('simpel list');
    const{
        data,
        onAction,
        onlabelClick
    }=props
   return(
    <div className='app-list'>
    {
     data.map((obj)=>{
       return <ListItem 
       key={obj.title} 
       title={obj.title}
        desc={obj.desc}
        onlabelClick={onlabelClick}
         isActive={obj.isActive}
         onDelete={()=>{
          onAction(obj)
         }}
         />
       })
      }
     
     </div>
   )
}
export default SimpleList;