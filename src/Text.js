import React, { Component } from 'react'

class Text extends  Component {

    state={
        show:false,
        myval:"This is an editable text."
    }
    
    ref=React.createRef()

    toggle=()=>{
        this.setState(
           state=>( {show:! state.show}),()=>{
            this.ref.current?.focus()
        }
        )
     }

    handleClickOutside=(event) =>{
        if (this.ref.current && !this.ref.current.contains(event.target)) {
         this.setState(
             state=>({show:!state.show}))
        }
      }

      componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
      }

     handleInput=(e)=>{
        this.setState(
           ( {myval: e.target.value}))
        console.log(this.state.show)
     }

    render() {

        
        return (
            <>
               
              
               <button onClick={this.toggle}>{this.state.show ? "hide" :"show"}</button>

               {this.state.show ? <input value={this.state.myval} onChange={this.handleInput} ref={this.ref}/> : <div >{this.state.myval}</div> } 
            </>
        )
    }
}

export default Text
