import Modal from "./UI/Modal";
import Button from "./UI/Button";

function Instruction(props) {
    const onCloseHandler = () => {
        props.onClose()
        props.onClick()
    }

    return (
        <Modal onClose={props.onClose}>

            <div style={{ fontFamily: 'Verdana' }}>
                <h1 >
                    <strong>How to play </strong>
                </h1>
                <h6>
                    1) Type in the duration you want the game to last (in seconds)
                </h6>
                <h6>
                    2) Choose your difficulty
                </h6>
                <h6>
                    3) Hit play! Good luck!
                </h6>
            </div>
            <Button onClick={onCloseHandler}>Got it!</Button>
        </Modal>
    )
}

export default Instruction;