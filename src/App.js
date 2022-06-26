import './App.css';
import { useState, Fragment } from 'react';
import SetUpForm from './components/SetUpForm';
import Header from './components/UI/Header';
import Instruction from './components/Instruction';

function App() {
  const [showInstruction, setShowInstruction] = useState();

  const onInstructionHandler=()=>{
    setShowInstruction(true)
  }

  const onCloseInstructionHandler = () => {
    setShowInstruction(false)
  }

  return (
    <Fragment>
      <Header onInstruction={onInstructionHandler}/>
      <p></p>
      <SetUpForm/>
      {showInstruction && <Instruction onClose={onCloseInstructionHandler} onClick={onCloseInstructionHandler}/>}
    </Fragment>
  );
}

export default App;
