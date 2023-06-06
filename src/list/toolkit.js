import React, { useImperativeHandle } from "react";


const Toolkit =(props,ref)=>{

  const myTest=()=>{
   console.log('this is my test')
  }
       
//   useImperativeHandle(ref,()=>{
//     return {
//         myTest:()=>{
//             console.log('this is my test')
//            }
//     }
//   })
    const{
        showtooltip,
        
    }=props

    return (
        <label ref={ref}
        className={`tooltip ${showtooltip ? 'show-tooltip' :'hide-tooltip'}`}
        >
            {props.message} 

        </label>
    )

}

export default React.forwardRef(Toolkit)