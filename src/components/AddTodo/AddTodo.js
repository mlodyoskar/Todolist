import React from 'react';
import styled from 'styled-components';
import { BsFillPlusCircleFill } from "react-icons/bs"

const AddTodoWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 4em;
    align-items: center;
    padding: 0 1em;
    cursor: pointer;
    &:hover svg {
        color: rgba(70,130,180, 0.5);
    }
`;

const PlusIcon = styled(BsFillPlusCircleFill)`
    width: 20px;
    height: 20px;
    color: black;
`;

const Add = styled.span`
    padding: 0 1em;
    font-size: 1.1rem;
`;

export const AddTodo = ({ toggleAddingTodo }) => {
    return (
        <AddTodoWrapper onClick={() => toggleAddingTodo(true)}>
            <PlusIcon />
            <Add>
                Add new todo
            </Add>
        </AddTodoWrapper>
    )
}
