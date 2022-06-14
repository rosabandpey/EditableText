import React, { Component } from 'react'

class Text extends  Component {

    state={
        myinput:false,
        myval:"This is an editable text."
    }

    convertToText=()=>{
        this.setState(
           state=>( {myinput:! state.myinput}))
        console.log(this.state.myinput)
     }

     convertToDiv=(e)=>{
        this.setState(
           ( {myval: e.target.value}))
        console.log(this.state.myinput)
     }

    render() {

        
        return (
            <>
               
              
               <button onClick={this.convertToText}></button>

               {this.state.myinput ? <input value={this.state.myval} onChange={this.convertToDiv}/> : <div >{this.state.myval}</div> } 
            </>
        )
    }
}

export default Text
