
import React,{Component} from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import DummyPage from "./pages/Dummypage";
import Usage from "./pages/Usage";
import HomePage2 from "./pages/homepagefunction";

class Myapp extends Component{
  constructor(props){
   super(props)
   this.state={
    currentSelected:'home'
   }
  }

  handleSelect=(val)=>{
  this.setState({
    currentSelected:val
  })

  }


 getPage(){
  const{
    currentSelected
  }=this.state


switch (currentSelected) {
  case 'home':
    return<HomePage2/>
    case 'usage':
    return<Usage  key={'usage'} />
    
    case 'settings':
    return<DummyPage key={'settings'} name={'settings'}/>
    
    case 'logout':
    return<DummyPage key={'logout'} name={'logout'}/>

  default:
    break;
}

 }


    render(){
     
  return (
    <div className='app'>
<Header onMenuSelect={this.handleSelect}/>
<div className='app-body'>
{this.getPage()}
</div>
<Footer/>
</div>
  )
    }
}
export default Myapp;