import Modal from "./UI/Modal";
import Button from "./UI/Button";

function Results(props) {
    const startGameHandler = () => {
        props.startGame();
    }
    return (
        <Modal>
            <div style={{ fontFamily: 'Verdana' }}>
                <strong>Game over!</strong>
                <div>points: {props.points}</div>
                <Button onClick={startGameHandler}>Try again!</Button>
            </div>

        </Modal>
    )
}

export default Results