import React from "react";
import CounterComponent from "../counter/Counter";
import Tictac from '../tictac/Tictac'


const HomeComponent = () => {
  return (
    <div>
      <CounterComponent/>
      <Tictac/>
    </div>
  );
};

export default HomeComponent;