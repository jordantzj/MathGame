import { Fragment } from 'react';
import classes from './Header.module.css';
import logo from '../../asset/question_mark.png'

function Header(props) {
    const base_url = 'http://localhost:3000/'
    const onInstructionHandler = () => {
        props.onInstruction()
    }
    return (
        <Fragment>
            <div>
                <div className={classes.header}>
                    <a href={base_url}>MATH</a>
                    <div className={classes.header_right}>
                        <a onClick={onInstructionHandler}><img width={20} height={20} src={logo} alt="Logo" /></a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Header