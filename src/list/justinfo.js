import React from "react";





const Justinfo =(props)=>{
    const{
     label
        
    }=props
console.log('justinfo');
    return(
        <div>
       Justinfo  
        </div>
    )

}

export default React.memo(Justinfo,(prevprops,nextprops)=>{
return false;
})