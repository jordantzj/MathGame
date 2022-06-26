// import Card from './UI/Card';
import { useState } from 'react';
import CountDown from './Countdown';
import Problem from './Problem';
import Results from './Results';
import FetchContext from '../context/FetchContext';

import { Form, Card, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const timeUpHandler = () => {
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
      <Container>
        <Row className="justify-content-center">
          <Card style={{ width: '8rem' }}>
            <CountDown Modal={showModalHandler} timeUp={timeUpHandler} time={props.time}></CountDown>
          </Card>
          <Card style={{ width: '30rem' }}>
            <Problem points={pointsHandler} difficulty={props.difficulty} />
          </Card>
          {showModal && <Results points={points} startGame={startGameHandler} />}
        </Row>
      </Container>
    </FetchContext.Provider>
  );
}

export default GamePage;
