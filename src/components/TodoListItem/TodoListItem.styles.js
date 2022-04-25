import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs"

const Wrapper = styled.li`
    position: relative;
    width: 100%;
    max-height: 5em;
    max-width: 30rem;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 1fr 1fr;
    align-content: center;
    padding: 1em;
    border-bottom: 1px solid rgba(99, 99, 99, 0.2);
`;

const LeftColumn = styled.div`
    grid-column: 0 / 1;
    grid-row: 0 / 2;
    display: flex;
    align-items: center;
    justify-items: center;
    height: 100%;
`;
const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1em;
`;
const Name = styled.p`
    font-size: 16px;
    text-align: start;
`;

const TodoInfo = styled.div`
    display: flex;
    align-items: center;
`;
const ThreeDotsWrapper = styled.div`
    display: flex;
    justify-content: end;
    height: 100%;
    cursor: pointer;
    position: relative;
`;
const ThreeDots = styled(BsThreeDotsVertical)`
    display: flex;
    align-self: center;
    height: 20px;
    width: 20px;
    visibility: hidden;
    border-radius: 100%;
    ${Wrapper}:hover & {
        visibility: visible;
    }
`;

export { Wrapper, LeftColumn, RightColumn, TodoInfo, Name, ThreeDotsWrapper, ThreeDots }
