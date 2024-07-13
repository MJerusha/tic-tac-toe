import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdExposurePlus1 } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";


const CounterComponent = () => {

    let [counter, setCounter] = useState(0)


    function increatment(){
        setCounter(counter++);
    }
    function reset(){
        counter = 0;
        setCounter(counter);
    }
    function decreatment(){
        setCounter(counter--);
    }

  return (
    <div>
      <h3>{counter}</h3>
      <MdExposurePlus1 onClick={increatment} size={'40px'} style={{color:'green', marginRight: '10px'}}/>
      <GrPowerReset onClick={reset} size={'40px'} style={{color:'red', marginRight: '10px'}}/>
      <FaMinusCircle onClick={decreatment} size={'40px'} style={{color:'yellow', marginRight: '10px'}}/>
    </div>
  );
};

export default CounterComponent;