import { AiFillCalendar } from "react-icons/ai"
import styled from "styled-components";

const CalendarTagWrapper = styled.span`
    display: flex;
    align-items: center;
    padding-right: 0.4em;
`;

export const CalendarIcon = () => {
    return (
        <CalendarTagWrapper>
            <AiFillCalendar />
        </CalendarTagWrapper>
    )
}