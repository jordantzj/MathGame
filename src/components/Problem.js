import Answer from "./Answer";
import { useState } from "react";

function Problem(props) {
    let max_num = 0;
    let min_num = 0;
    //const OPERATORS_ARRAY = ['+', '-', '*', '/'];

    if(props.difficulty === 'easy'){
        max_num = 21
        min_num = 1
    }else if(props.difficulty === 'medium'){
        max_num=51
        min_num = 10
    }else if(props.difficulty === 'hard'){
        max_num = 201
        min_num = 100
    }
    const [num1, setNum1] = useState(Math.floor(Math.random() * (max_num - min_num) + min_num));
    const [num2, setNum2] = useState(Math.floor(Math.random() * (max_num - min_num) + min_num));

    const changeQuestionHandler = () => {
        if(props.difficulty === 'easy'){
            max_num = 21
            min_num = 1
        }else if(props.difficulty === 'medium'){
            max_num=51
            min_num = 10
        }else if(props.difficulty === 'hard'){
            max_num = 201
            min_num = 100
        }
        setNum1(Math.floor(Math.random() * (max_num - min_num) + min_num))
        setNum2(Math.floor(Math.random() * (max_num - min_num) + min_num))
        
    }
    

    const pointsHandler = (data) => {
        props.points(data)
    }
    return (
        <Answer num1={num1} num2={num2} changeQuestion={changeQuestionHandler} points={pointsHandler}></Answer>
    )
}

export default Problem;