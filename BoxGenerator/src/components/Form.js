import React, {useState} from 'react';

const Form = props => {

    const [color, setColor] = useState();
    const [width, setWidth] = useState();

    
    return(


            <div>
                <form onSubmit={e => props.createBox(e, color, width)}>
                    <label>Color:</label>
                    <input type="text" name="color" onChange={ e => setColor(e.target.value) }/>
                    <label>Width:</label>
                    <input type="text" name="width" onChange={ e => setWidth(e.target.value) }/>
                    <input class="greenbtn" type="submit" value="Add it!"/>
                </form>
            </div>
    )
}

export default Form;