import React, { useState } from "react"
import { EventEmitter } from "../event-emitter";

// 一个组件可以订阅一个事件并在事件被触发时更新自己

const SubscriberComponent = () => {
  const [counter, setCounter] = useState(0);

  const eventEmitter = new EventEmitter() // get
  // 订阅事件
  eventEmitter.on("counterIncrease", (increment:number) => {
    setCounter((prevCounter) => prevCounter + increment);
  });

  return <div>Counter: {counter}</div>;
}

const  PublisherComponent = (props:{increment: number})=> {
    const eventEmitter = new EventEmitter()
  function handleButtonClick() {
    // 触发事件
    eventEmitter.emit("counterIncrease", props.increment);
  }

  return <button onClick={handleButtonClick}>Increase Counter by {props.increment}</button>;
}

function App() {
  return (
    <div>
      <SubscriberComponent />
      <PublisherComponent increment={1} />
    </div>
  );
}
