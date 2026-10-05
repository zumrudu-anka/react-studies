import React, { Component } from 'react'

export default class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state= {
      input : "",
      result : ""
    };
  }

  deneme = (event) =>{
    if(event.code === "Enter"){
      this.setState({
        result : this.state.input,
        input : "",
      });
    }else{
      let input = this.state.input;
      input += event.key;
      this.setState({
        input,
        result : ""
      });
    }
  }

  render() {
    return (
      <div className="App" onKeyPress={this.deneme} tabIndex={0}>
        <p>
          Press Keys and Enter to Show
        </p>
        <p>
          Result : {this.state.result}
        </p>
      </div>
    )
  }
}