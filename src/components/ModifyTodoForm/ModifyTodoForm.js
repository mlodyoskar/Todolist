import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Icon } from "components/Icon/Icon";
import { FiCalendar, FiTag } from "react-icons/fi";
import { TodosContext } from "providers/TodosProvider";
import { useForm } from "hooks/useForm"
import { nanoid } from "nanoid";


const Wrapper = styled.form`
    padding: 1em;    
`;
const InputWrapper = styled.div`
    padding: 0.5rem;
    border: 1px solid rgba(70,130,180, 0.4);
    border-radius: 10px;
`;
const ButtonsWrapper = styled.div`
    display: flex;
    padding: 0.5em 0;
    position: relative;
`;


export const ModifyTodoForm = ({ todo: { id, name, completed, beingModified, tags, dueDate } }) => {
    const { formValues, handleInputChange } = useForm({
        id, name, completed, beingModified, tags, dueDate
    });
    const { toggleBeingModified, addTodo, deleteTodo } = useContext(TodosContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: nanoid(),
            name: formValues.name,
            completed: formValues.completed,
            beingModified: false,
            tags: formValues.tags,
            dueDate: formValues.dueDate
        }
        if (newTodo.name) {
            deleteTodo(id)
            addTodo(newTodo)
        }
    }

    return (

        <Wrapper onSubmit={(e) => handleSubmit(e, name)} >
            <InputWrapper>
                <Input
                    autoComplete="off"
                    name="name"
                    type="text"
                    autoFocus
                    value={formValues.name}
                    onChange={handleInputChange}
                />
                <ButtonsWrapper>
                    <Button type="button" secondary >
                        <Icon size='s'>
                            <FiCalendar />
                        </Icon> Today
                    </Button>

                    <Button type="button" secondary >
                        <Icon>
                            <FiTag />
                        </Icon>
                    </Button>
                </ButtonsWrapper>

            </InputWrapper>
            <ButtonsWrapper>
                <Button type="submit" primary onClick={(e) => handleSubmit(e, id, name)} >Edit Todo</Button>
                <Button type="button" secondary onClick={() => toggleBeingModified(id)} >Cancel</Button>
            </ButtonsWrapper>
        </Wrapper >
    )
}