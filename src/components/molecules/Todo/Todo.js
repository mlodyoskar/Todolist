import { Checkbox } from "../../atoms/Checkbox";
import styled from "styled-components";
import { CheckIfisDue, GetDayAndMonth } from "../../../helpers/date";
import { CalendarIcon } from "../../atoms/CalendarIcon"
import { TagIcon } from "../../atoms/TagIcon"
import { BsThreeDotsVertical } from "react-icons/bs"


const Wrapper = styled.li`
    position: relative;
    width: 100%;
    max-height: 4.5em;
    display: flex;
    align-content: center;
    padding: 1em;
    border-bottom: 1px solid rgba(99, 99, 99, 0.2);
    cursor:pointer;
`;

const CheckBoxWrapper = styled.div`
    display: flex;
    height: 100%;
`;
const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1em;
`;
const TodoInfo = styled.div`
    display: flex;
    align-items: center;
`;
// const TodoOptions = 

const TodoDate = styled.span`
    display: flex;
    align-items: center;
    width: 4rem;
    justify-content: space-around;
    font-size: 0.8rem;
    padding: 0.5rem;
    padding-left: 0;
    color: ${props => CheckIfisDue(props.dueDate) ? "#FF4500" : "black"};

`;
const TodoTag = styled.span`
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
const ThreeDotsWrapper = styled.div`
    display: flex;
    height: 100%;
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


export const Todo = ({ todo, toggleComplete, modifyTodo, deleteTodo }) => {
    return (
        <Wrapper>
            <CheckBoxWrapper>
                <Checkbox done={todo.completed} onClick={() => { toggleComplete(todo.name) }}></Checkbox>
            </CheckBoxWrapper>
            <TodoWrapper>
                <div>
                    <p className={todo.completed ? "todo-name todo-name_completed" : "todo-name"}>{todo.name}</p>
                </div>
                <TodoInfo>
                    <TodoDate dueDate={todo.dueDate} >
                        <CalendarIcon /> {GetDayAndMonth(todo.dueDate)}
                    </TodoDate>
                    {todo.tags.map(tag => <TodoTag><TagIcon />{tag}</TodoTag>)}
                </TodoInfo>
            </TodoWrapper>
            <ThreeDotsWrapper>
                <ThreeDots />
            </ThreeDotsWrapper>
        </Wrapper>
    );
}