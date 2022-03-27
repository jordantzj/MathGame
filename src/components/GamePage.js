import Card from './UI/Card';
import { useState } from 'react';
import CountDown from './Countdown';
import Problem from './Problem';
import Results from './Results';
import FetchContext from '../context/FetchContext';

function GamePage(props) {
  const [showModal, setShowModal] = useState();
  const [points, setPoints] = useState();
  const [timeUp, setTimeUp] = useState();


  const showModalHandler = () => {
    setShowModal(true);
  }

  const pointsHandler = (data) => {
    setPoints(data);
  }

  const timeUpHandler = () =>{
    setTimeUp(true)
  }
  
  const startGameHandler = () => {
    window.location.reload(false);
  }


  return (
    <FetchContext.Provider
    value={{
      timeUp: timeUp
    }}>
      <Card>
        <CountDown Modal={showModalHandler} timeUp={timeUpHandler} time={props.time}></CountDown>
      </Card>
      <Card>
        <Problem points={pointsHandler} difficulty={props.difficulty}/>
      </Card>
      {showModal && <Results points={points} startGame={startGameHandler}/>}
    </FetchContext.Provider>
  );
}

export default GamePage;
