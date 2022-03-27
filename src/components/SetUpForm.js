import { Fragment, useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import GamePage from "./GamePage";

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
            {showSetUp && <Card>
                <form onSubmit={startGameHandler}>
                    <div>Time:</div>
                    <div>
                        <input type="number" placeholder="In Seconds" required={true}></input>
                    </div>
                    <p></p>
                    <div>Difficulty:</div>
                    <div required={true}>
                        <input type="radio" id="easy" name="difficulty" value="easy" checked={enteredDifficulty==="easy"} onChange={onDifficultyChangeHandler} required={true}></input>
                        <label htmlFor="html">Easy</label><br></br>
                        <input type="radio" id="medium" name="difficulty" value="medium" checked={enteredDifficulty==="medium"} onChange={onDifficultyChangeHandler}></input>
                        <label htmlFor="medium">Medium</label><br></br>
                        <input type="radio" id="hard" name="difficulty" value="hard" checked={enteredDifficulty==="hard"} onChange={onDifficultyChangeHandler}></input>
                        <label htmlFor="hard">Hard</label><br></br>
                    </div>
                    <Button type="submit">Play!</Button>
                </form>
            </Card>}
            {showGame && <GamePage time={enteredTime} difficulty={enteredDifficulty}/>}
        </Fragment>
    );
}

export default SetUpForm;