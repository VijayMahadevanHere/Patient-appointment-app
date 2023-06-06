import React from "react";
import { Mycontext,MyNewContext } from "../pages/context";
import './label.css'
class Label2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showToolTip:false
        }
    }
    static contextType=MyNewContext;
    handleMOuseEnter=()=>{
        this.setState(()=>{
           return( {showToolTip:true})
        })
    }

    handleMouseLeave=()=>{
       this.setState(()=>{
        return ({showToolTip:false})
       })
    }
    render(){
  
        const props=this.props
        const isActive=props.isActive
        const style= isActive ? {background:'green'} : {background:'orange'}
       

            return (
                <Mycontext.Consumer>
                    { (val)=>{
                       if(val===false){
                        return null;
                       }
                       return(
                        <div className="list-label-item-container">
                        <span 
                       
                         className='list-label-item'
                         style={style}
                         onMouseEnter={this.handleMOuseEnter}
                         onMouseLeave={this.handleMouseLeave}
                         
                         >
                        {isActive ? 'Active' : 'Non Active' }
                         
                         </span>
                         <label className={`tooltip${this.showToolTip ? 'show-tooltip' :'hide-tooltip'}`}>
                            This is {isActive ? 'Active':'Non-active'}
                         </label>
                         </div>
                       )
                    }}
           
                 </Mycontext.Consumer>
        )

    }
}

export default Label2;