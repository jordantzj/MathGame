import { Fragment, useState } from "react";
// import Card from "./UI/Card";
import Button from "./UI/Button";
import GamePage from "./GamePage";

import { Form, Card, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SetUpForm(props) {
    const [enteredTime, setEnteredTime] = useState('');
    const [showGame, setShowGame] = useState(false);
    const [showSetUp, setShowSetUp] = useState(true);
    const [enteredDifficulty, setEnteredDifficulty] = useState();

    const onDifficultyChangeHandler = (event) => {
        setEnteredDifficulty(event.target.value)
    }


    const startGameHandler = (event) => {
        event.preventDefault();
        setEnteredTime(parseInt(event.target[0].value))
        setShowGame(true)
        setShowSetUp(false)

    }

    return (
        <Fragment>
            <Container style={{ fontFamily: 'Verdana' }}>
                <Row className="justify-content-center">
                    {showSetUp && <Card style={{ width: '30rem' }}>
                        <Form onSubmit={startGameHandler}>
                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                <Form.Label><strong>Time</strong></Form.Label>
                                <Form.Control type="number" placeholder="In Seconds" required />
                                <Form.Text className="text-muted">
                                    How long do you need? 😉
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="forRadio">
                                <Form.Label><strong>Difficulty</strong></Form.Label>
                                <Form.Check
                                    required
                                    name="difficulty"
                                    value="easy"
                                    type="radio"
                                    aria-label="easy"
                                    label="Easy"
                                    onChange={onDifficultyChangeHandler}
                                    checked={enteredDifficulty === "easy"}
                                />
                                <Form.Check
                                    name="difficulty"
                                    value="medium"
                                    type="radio"
                                    aria-label="medium"
                                    label="Medium"
                                    onChange={onDifficultyChangeHandler}
                                    checked={enteredDifficulty === "medium"}
                                />
                                <Form.Check
                                    name="difficulty"
                                    value="hard"
                                    type="radio"
                                    aria-label="hard"
                                    label="Hard"
                                    onChange={onDifficultyChangeHandler}
                                    checked={enteredDifficulty === "hard"}
                                />
                                <Form.Text className="text-muted">
                                    How good are you? 🤔
                                </Form.Text>
                            </Form.Group>
                            <Button type="submit">Play!</Button>

                        </Form>
                    </Card>}
                </Row>
            </Container>
            {showGame && <GamePage time={enteredTime} difficulty={enteredDifficulty} />}
        </Fragment>
    );
}

export default SetUpForm;