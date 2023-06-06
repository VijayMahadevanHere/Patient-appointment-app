import React from 'react';
import Tools from '../list/Tools';
import SimpleList from '../list/SimpleList';
import { Mycontext,MyNewContext } from "../pages/context";
import Justinfo from '../list/justinfo';
class HomePage extends React.Component{   //state is a variable that react provides and every tiem the state changes the react will call the render function
 constructor(props){
  super(props)

  this.state={
      data:[],
      activeState:'all',
      message:'',
      showLabel:true
  }

 }
 componentDidMount(){
console.log('component did mount');
  fetch('/data2.json').then((data)=>{
     return data.json()
  })
  .then((data)=>{
   this.setState({
    data:data
   })
  })
 }
 componentDidUpdate(prevprops,prevstate){

  if(prevstate.message!==this.state.message){
    this.setState({
      message:'jsellew'
      })
  }

 }
 componentWillUnmount(){
  console.log('compomentwillunmount');
 }

   onAction =(evt)=>{
   
    const value=evt.target.value
   
   this.setState((state)=>{
    return({
     activeState:value
    })
   },()=>{
   
   })
  }

  handleDelete=(item)=>{
  const newList=this.state.data.filter((element)=> element.id !== item.id)

 this.setState({
  data:newList
 })

  }
  handleLableClick=(arg)=>{
  this.setState({
    activeState:arg
  })
  }
  handleLabel=(arg)=>{
    this.setState({
      showLabel:arg.target.checked
    })
  }

render(){
  const{
    data,
    activeState
  }=this.state
  
  
 const newarr = data.filter((item)=>{
      if(activeState ==='all'){
        return true;
      }
      if(activeState==='active'){
        return item.isActive===true;
      }
      if(activeState==='non-active'){
        return item.isActive===false;
      }
      else{
        return false;
      }
    })
    
   return (
    <div>
      <div>
        <input  onClick={this.handleLabel} defaultChecked={this.state.showLabel} type='checkbox' ></input>Show label
      </div>

      <Mycontext.Provider value={this.state.showLabel}>
    <Tools labelValue={activeState} onAction={this.onAction}>
  <SimpleList onlabelClick = {this.handleLableClick} data={newarr} onAction={this.handleDelete}/>
   </Tools>

   </Mycontext.Provider>
   </div>
   )
}
}


export default HomePage;

