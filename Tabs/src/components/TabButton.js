import styled from "styled-components";

const TabButton = styled.button`
    color: ${props => props.selected ? "green" : "black"};
    background-color: ${props => props.selected ? "aqua" : "white"};
    border: 1px solid black;
    padding: 15px;
`;

export default TabButton;