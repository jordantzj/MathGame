import { Fragment, useState, useContext, useEffect} from "react";
import FetchContext from "../context/FetchContext";
import classes from './Answer.module.css'

function Answer(props) {
    const [points, setPoints] = useState(0);
    const [enteredValue, setEnteredValue] = useState('');
    const ctx = useContext(FetchContext);
    const [wrongAnswer, setWrongAnswer] = useState();

    const answerChangeHandler = (event) => {
        event.preventDefault();
        setEnteredValue(parseInt(event.target.value))
    }


    const answerSubmitChandler = (event) => {
        event.preventDefault();
        const answer = props.num1 + props.num2
            if (enteredValue === answer) {
                setWrongAnswer(false)
                setPoints(points + 1)
                setEnteredValue('')
                props.changeQuestion();
                
            } else {
                setWrongAnswer(true)
            }
    }
    
    useEffect(() => {
        props.points(points);
    }, [ctx.timeUp]);

    return (
        <Fragment>
            {props.num1} + {props.num2} =
            <form onSubmit={answerSubmitChandler}>
                {ctx.showModal && <input className={classes.input} type="number" value={enteredValue} onChange={answerChangeHandler} disabled={true}></input>}
                {!ctx.showModal && <input className={wrongAnswer ?  classes.inputwrong: classes.input} type="number" value={enteredValue} onChange={answerChangeHandler}></input>}
            </form>
            <p>points: {points}</p>
        </Fragment>
    )
}
export default Answer