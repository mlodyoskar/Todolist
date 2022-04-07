import react from "react"
import styled from "styled-components";

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
`;

const Wrapper = styled.div`
    position: absolute;
    top: 40px;
    background-color: #FEFEFE;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 50;
    height: auto;
    width: 25%;
    border-radius: 10px;
    
`;

const List = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
`;
const ListItem = styled.li`
padding: 0.4em 0.2em;
cursor: pointer;
border-bottom: 1px solid #f0f0f0;
`;

const DatePicker = () => {
    return (
        <Wrapper>
            <List>
                <ListItem>Today</ListItem>
                <ListItem>Tomorrow</ListItem>
                <ListItem>Monday</ListItem>
            </List>
        </Wrapper>
    )
}

export default DatePicker;