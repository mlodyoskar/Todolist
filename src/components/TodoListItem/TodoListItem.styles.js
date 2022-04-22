import styled from "styled-components";
import { CheckIfisDue, GetDayAndMonth } from "helpers/date";

const Wrapper = styled.li`
    position: relative;
    width: 100%;
    max-height: 5em;
    max-width: 30rem;
    display: grid;
    grid-template-columns: 10% 90%;
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

const Date = styled.span`
    display: flex;
    align-items: center;
    width: 4rem;
    justify-content: space-around;
    font-size: 0.8rem;
    padding: 0.5rem;
    padding-left: 0;
    color: ${props => CheckIfisDue(props.dueDate) ? "#FF4500" : "black"};
`;
const Tag = styled.span`
    height: 60%;
    display: flex;
    align-items: center;
    justify-items: center;
    font-size: 0.8rem;
    padding: 0 0.4rem;
    background-color: rgba(70,130,180, 0.5);
    border-radius: 10px;
    margin: 0 0.2rem;
`;
// const ThreeDotsWrapper = styled.div`
//     display: flex;
//     height: 100%;
//     cursor: pointer;
//     position: relative;
// `;
// const ThreeDots = styled(BsThreeDotsVertical)`
//     display: flex;
//     align-self: center;
//     height: 20px;
//     width: 20px;
//     visibility: hidden;
//     border-radius: 100%;
//     ${Wrapper}:hover & {
//         visibility: visible;
//     }
// `;
// const OptionsWrapper = styled.div`
//     position: absolute;
//     width: 10rem;
//     height: 4rem;
//     cursor: default;
// `;
// const Overlay = styled.div`
//     position: fixed;
//     top: 0;
//     left:0;
//     right: 0;
//     bottom: 0;
//     z-index: 100;
// `;
// const OptionsList = styled.ul`
//     width: 100%;
//     /* height: 100%; */
//     padding: 0;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     position: absolute;
//     list-style: none;
//     z-index: 200;
//     background-color: #FEFEFE;
//     border-radius:10px;
//     box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;

// `;
// const OptionsListItem = styled.li`
//     cursor: pointer;
//     width: 100%;
//     height: 100%;
//     text-align: start;
//     padding: 0.5em 1em;
//     font-size: 1rem;
//     padding-bottom: 0.5rem;
//     border-radius: ${props => props.delete ? "0 0 10px 10px" : "10px 10px 0 0"};
//     color: ${props => props.delete ? "#FF4500" : ""};

//     &:hover {
//         background-color: rgb(99 99 99 / 10%);
//     }
// `;

export { Wrapper, LeftColumn, RightColumn, Date, Tag, TodoInfo, Name }
