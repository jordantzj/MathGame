import Modal from "./UI/Modal";
import Button from "./UI/Button";

function Instruction(props) {
    const onCloseHandler = ()=>{
        props.onClose()
        props.onClick()
    }

    return (
        <Modal onClose={props.onClose}>
            <h1 >
                <u>How to play </u>
            </h1>
            <h4>
                1) Type in the duration you want the game to last in seconds
            </h4>
            <h4>
                2) Choose your difficulty
            </h4>
            <h4>
                3) Hit play! Good luck!
            </h4>
            <Button onClick={onCloseHandler}>Got it!</Button>
        </Modal>
    )
}

export default Instruction;