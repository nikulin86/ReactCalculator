// eslint-disable-next-line
import React, {useState, useRef} from 'react';


export const Hook = () => {
  let stateValue = {
    buttons: [
        { val: '1' }, { val: '2' }, { val: '3' }, { val: '4' }, { val: '5' }, { val: '6' }, { val: '7' }, { val: '8' }, { val: '9' }, { val: '0' }, { val: '-' }, { val: '+' }, { val: '*' }, { val: '/' }, { val: '.' } ],

        operations: [{ val: 'CE' }, { val: 'C' },{ val: '=' }, ]
}

    const [count, setCount] = useState(stateValue);
    const [out, setOut] = useState('0');
    const refREf = useRef()
 
    const tapeName=(value) =>{
      let currentValue = value
      let outRef = refREf.current
  
      setCount({
        out: currentValue
      })
   
      if(outRef.value === '0') {outRef.value = ''}
      outRef.value += currentValue
    }
  
  
  
    const tapeNames = (value) => {
      let outRef = refREf.current
  
    
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



    return (
        <div className="container">
        <div className="input">
          <input ref={refREf} type="text" defaultValue={out}/>
        </div>
        <div className="buttons-button">
        {stateValue.buttons.map((item, keys) =>  <button key={keys} onClick={()=> {setCount(tapeName(item.val))}}>{item.val}</button>)}
        </div>
        <div className="buttons-operations">
        {stateValue.operations.map((item, keys) =>  <button key={keys} onClick={()=> {setCount(tapeNames(item.val))}}>{item.val}</button>)}
        </div>
      </div>
    )
}


export default Hook;