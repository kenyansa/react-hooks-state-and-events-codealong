import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  //under the handleClick callback function: we must call the setter function to update our state variable.
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color =isOn ? "skyblue" : "white";
  return <button style={{background: color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
