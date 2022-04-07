import react from "react";
import styled from "styled-components";


const PopupContent = styled.div`
    position: absolute;
    top: 2.6rem;
    width: 40%;
    background-color: rgba(100,176,235, 1);
    border: 1em;
    z-index: 100;
    border-radius: 0.4em;
`;
const PopupList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
    
`;
const PopupListItem = styled.li`
    padding: 0.3rem;
    text-align: start;
    width: 100%;
    cursor: pointer;
    color: white;
`;

export const Popup = ({ items }) => {
    return (
        <PopupContent>
            <PopupList>
                {items.map(item => {
                    return (
                        <PopupListItem>
                            {item}
                        </PopupListItem>
                    )
                })}
            </PopupList>
        </PopupContent>
    )
}