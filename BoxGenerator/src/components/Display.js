import React, {useState} from 'react';
import Form from './Form';

const Display  = props => {

    const {boxes} = props;
    
    const createBox = (e, color, width) => {
        e.preventDefault();
        props.setBoxes([...props.boxes, <div style={{backgroundColor: color, height: width + "px", width: width + "px"}}></div>]);
    }

    return(
        <div>
            <Form createBox={createBox}/>
            <div id="boxey">
                <ul>{
                boxes.map((box, i) =>
                    <li key={i}>{box}</li>
                )       
                }</ul>
            </div>
        </div>
    )
}
export default Display;