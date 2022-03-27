import Modal from "./UI/Modal";
import Button from "./UI/Button";

function Results(props) {
    const startGameHandler= () =>{
        props.startGame();
    }
    return (
        <Modal>
            <div>Game over!</div>
            <div>points: {props.points}</div>
            <Button onClick={startGameHandler}>Try again!</Button>
        </Modal>
    )
}

export default Results