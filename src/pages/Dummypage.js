import React from "react";


class DummyPage extends React.Component{
    // componentDidMount(){
    //     console.log('component did mount',this.props.name);
    // }
  
    // componentWillUnmount(){
    //     console.log('componet will unmount',this.props.name);
    // }
    // componentDidUpdate(){
    //     console.log('component did update',this.props.name);
    // }
    render(){
      
        return(
            <div >
                {this.props.name}
            </div>
        )
    }
}


export default DummyPage;