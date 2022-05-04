import styled from 'styled-components'


export const Checkbox = styled.button`
    width: 20px;
    height: 20px;
    display: flex;
    border-radius: 20px;
    justify-self: flex-end;
    cursor: pointer;
    border: ${props => props.done ? "none" : "1px solid black"};
    background-color: ${props => props.done ? "rgba(70,130,180,0.8)" : "white"};

    &:hover{
       background-color : ${props => props.done ? "rgba(70,130,180,0.8)" : "rgba(70,130,180,0.5)"};
    }

`;