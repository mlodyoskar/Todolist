import { FiCalendar } from "react-icons/fi";
import styled from "styled-components"
import { checkIfisDue } from "helpers/date";


export const Date = styled.span`
    display: flex;
    align-items: center;
    width: 4rem;
    justify-content: space-around;
    font-size: 0.8rem;
    padding: 0.5rem;
    padding-left: 0;
    color: ${props => checkIfisDue(props.dueDate) ? "#FF4500" : "black"};
`;

export const DueDate = ({ dueDate }) => {
    return <Date><FiCalendar />{dueDate}</Date>
}