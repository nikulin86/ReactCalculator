// eslint-disable-next-line
import React from 'react';
import './App.css';
import store from './store';


class Class extends React.Component {
  constructor() {
    super()
    this.state = {
      out: '0'
    }
    
    this.refREf = React.createRef()
  }

 tapeName(value) {
    let currentValue = value
    let outRef = this.refREf.current

    this.setState({
      out: currentValue
    })
 
    if(outRef.value === '0') {outRef.value = ''}
    outRef.value += currentValue
  }



  tapeNames(value) {
    let outRef = this.refREf.current

  
    if (value === 'CE') {
      outRef.value.length === 1 ? outRef.value = '0' : outRef.value = outRef.value.substring(0, outRef.value.length - 1)
    }

    else if(value === 'C') {outRef.value = '0'}
    else if(value === '=') {
      try{
        outRef.value = eval(outRef.value)
      }catch{
        outRef.value  = 'error'
        setTimeout(() => {outRef.value = '0'}, 1500)
      }
    }

  }


  render() {
    return (
      <div className="container">
        <div className="input">
          <input ref={this.refREf} type="text" defaultValue={this.state.out}/>
        </div>
        <div className="buttons-button">
        {store.buttons.map((item, keys) =>  <button key={keys} onClick={()=> {this.tapeName(item.val)}}>{item.val}</button>)}
        </div>
        <div className="buttons-operations">
        {store.operations.map((item, keys) =>  <button key={keys} onClick={()=> {this.tapeNames(item.val)}}>{item.val}</button>)}
        </div>
      </div>
    )
  }
}

export default Class;