import './App.css';
import React,{ useState } from 'react';
import Display from "./components/Display/Dislay";
import Keypad from "./components/Keypad/Keypad";
import Button from "./components/Buttons/Buttons";

function lastValueChecker(lastValv)
{
  if (lastValv === "*" || lastValv === "/" || lastValv === "+" || lastValv === "-" || lastValv === ".")
  {
    return true;
  }
  else
  {
    return false;
  }
}

function App() {
    const [state, setState] = useState({data: ""})
    function calculate() 
    {
      try
      {
          const result = eval(state.data);
          setState({data: result});
      }
      catch (e)
      {
          setState({data: 'error'});
      }
    }

  function handleClick (e) {
      const value = e.target.getAttribute('data-value');
      console.log(state.data[state.data.length-1]);
      if (state.data === '' && lastValueChecker(value))
      {
        setState({ data: ''});
      }
      else if (lastValueChecker(state.data[state.data.length-1]) && lastValueChecker(value))
      {
        setState({data : `${state.data}`})
      }
      else if(lastValueChecker(state.data[state.data.length-1]) && value === 'equal')
      {
        setState({data : `${state.data}`})
      }
      else if(value === "clear")
      {
        setState({ data: ''});
      }
      else if(value === 'equal')
      {
        calculate();
      }
      else
      {
        setState({ data: state.data += value});
      }
  }
  return (
    <div className="Calculator">
      <Display data={state.data}/>
      <Keypad>
        <Button onClick={handleClick} label="C" value="clear" />
        <Button onClick={handleClick} label="7" value="7" />
        <Button onClick={handleClick} label="4" value="4" />
        <Button onClick={handleClick} label="1" value="1" />
        <Button onClick={handleClick} label="." value="." />

        <Button onClick={handleClick} label="/" value="/" />
        <Button onClick={handleClick} label="8" value="8" />
        <Button onClick={handleClick} label="5" value="5" />
        <Button onClick={handleClick} label="2" value="2" />
        <Button onClick={handleClick} label="0" value="0" />

        <Button onClick={handleClick} label="✕" value="*" />
        <Button onClick={handleClick} label="9" value="9" />
        <Button onClick={handleClick} label="6" value="6" />
        <Button onClick={handleClick} label="3" value="3" />

        <Button onClick={handleClick} label="=" value="equal" />
        <Button onClick={handleClick} label="+" size="2" value="+" />
        <Button onClick={handleClick} label="-" size="2" value="-" />
      </Keypad>
    </div>
  );
}

export default App;
