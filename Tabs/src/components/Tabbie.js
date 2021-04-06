import React, {useState} from 'react';
import TabButton from "./TabButton";
import TabStuff from "./TabStuff";

const Tabbie = props => {
    const [state, setState] =useState({
        thisTab: 1
    });
    const onTabClick =(e, value) => {
        e.preventDefault();
        setState({
            thisTab: value
        });
    };

    return (
        <div>
            <h1>Tab Page</h1>
            {[1, 2, 3, 4].map((val, index) => (
                <TabButton key={index} onClick={e => onTabClick(e, val)} selected={state.thisTab === val}>Tab {val}</TabButton>
            ))}
            <TabStuff selected={state.thisTab}/>
        </div>
    )
}

export default Tabbie;