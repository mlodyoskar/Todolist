import styled from "styled-components";

const OverlayWrapper = styled.div`
    position: absolute;
    top: 2.5em;
    width: auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;

`;
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: 100;
`;

const List = styled.ul`
    position: relative;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    z-index: 2000;
    background-color: #FEFEFE;
    border-radius: 10px;

`;

const ListItem = styled.li`
    min-width: 6em;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: start;
    padding: 0.5em ;
    font-size: 1rem;
    padding-bottom: 0.5rem;
    color: ${props => props.delete ? "red" : ""};

    &:hover {
        background-color: rgb(99 99 99 / 10%);
    }
    &:first-child{
        border-radius: 10px 10px 0 0;
    }
    &:last-child{
        border-radius: 0 0 10px 10px;
    }
`;


export { List, ListItem, OverlayWrapper, Overlay }