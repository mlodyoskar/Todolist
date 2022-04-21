import { useState } from "react"
import { Checkbox } from "../Checkbox/Checkbox";
import styled from "styled-components";
import { CheckIfisDue, GetDayAndMonth } from "../../helpers/date";
import { BsThreeDotsVertical, BsFillTrashFill } from "react-icons/bs"
import { FiEdit, FiCalendar, FiTag } from "react-icons/fi"
import { Icon } from "components/Icon/Icon";
import { Tag } from "components/Tag/Tag";

const Wrapper = styled.li`
    position: relative;
    width: 100%;
    max-height: 5em;
    display: flex;
    align-content: center;
    padding: 1em;
    border-bottom: 1px solid rgba(99, 99, 99, 0.2);
`;

const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
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

const ThreeDotsWrapper = styled.div`
    display: flex;
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
const OptionsWrapper = styled.div`
    position: absolute;
    width: 10rem;
    height: 4rem;
    cursor: default;
   
`;
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: 100;
`;
const OptionsList = styled.ul`
    width: 100%;
    /* height: 100%; */
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    list-style: none;
    z-index: 200;
    background-color: #FEFEFE;
    border-radius:10px;
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;

`;
const OptionsListItem = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: start;
    padding: 0.5em 1em;
    font-size: 1rem;
    padding-bottom: 0.5rem;
    border-radius: ${props => props.delete ? "0 0 10px 10px" : "10px 10px 0 0"};
    color: ${props => props.delete ? "#FF4500" : ""};
    
    &:hover {
        background-color: rgb(99 99 99 / 10%);
    }
`;

const Options = ({ deleteTodo, toggleBeingModified }) => {
    return (
        <OptionsWrapper>
            <Overlay />
            <OptionsList>
                <OptionsListItem onClick={toggleBeingModified}>
                    <Icon>
                        <FiEdit />
                    </Icon> Edit
                </OptionsListItem>
                <OptionsListItem onClick={deleteTodo} delete >
                    <Icon>
                        <BsFillTrashFill />
                    </Icon> Delete
                </OptionsListItem>
            </OptionsList>
        </OptionsWrapper>
    )
}


export const Todo = ({ todo, toggleComplete, deleteTodo, toggleBeingModified }) => {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const [dateVisible, setDateVisible] = useState(false);
    const [tagsVisible, setTagsVisible] = useState(false);


    const toggleOptionsVisibility = () => {
        setOptionsVisible((prevVal) => !prevVal);
    }
    const toggleDateVisibility = () => {
        setDateVisible((prevVal) => !prevVal);
    }
    const toggleTagsVisibility = () => {
        setTagsVisible((prevVal) => !prevVal);
    }
    return (
        <Wrapper>
            <CheckBoxWrapper>
                <Checkbox done={todo.completed} onClick={() => { toggleComplete(todo.id) }}></Checkbox>
            </CheckBoxWrapper>
            <TodoWrapper>
                <div>
                    <p className={todo.completed ? "todo-name todo-name_completed" : "todo-name"}>{todo.name}</p>
                </div>
                <TodoInfo>
                    <TodoDate onClick={toggleDateVisibility} dueDate={todo.dueDate} >
                        <FiCalendar /> {GetDayAndMonth(todo.dueDate)}
                    </TodoDate>
                    {todo.tags.map(tag => <Tag key={tag} name={tag} />)}
                </TodoInfo>
            </TodoWrapper>
            <ThreeDotsWrapper onClick={toggleOptionsVisibility}>
                <ThreeDots />
                {optionsVisible && <Options toggleBeingModified={() => toggleBeingModified(todo.id)} deleteTodo={() => deleteTodo(todo.id)} />}
            </ThreeDotsWrapper>
        </Wrapper>
    );
}