import React from "react";


class Text extends React.Component{
    constructor(props){
        super(props)
        this.state={
         titleInput:''
        }
    }

    handleChange=(evt)=>{
        const value=evt.target.value
     this.setState({
        titleInput:value
     })
    }

  addTitle=()=>{
    console.log(this.state.titleInput)
  }

render(){
    return (
      <div className="add-new">
        <input value={this.state.titleInput}onChange={this.handleChange} />
        <button onClick={this.addTitle}>Click</button>
      </div>

    )
}
}

export default Text;