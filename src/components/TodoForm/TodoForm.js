import { Icon } from "components/Icon/Icon";
import React, { useState, useContext } from "react";
import { FiCalendar, FiTag } from "react-icons/fi";
import styled from "styled-components";
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Calendar } from "components/Calendar/Calendar";
import { useForm } from "hooks/useForm";
import { nanoid } from "nanoid";
import { TodosContext } from "providers/TodosProvider";
import { TagsSelect } from "components/TagsSelect/TagsSelect";

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

const initialFormState = { name: '', completed: false, tags: [], dueDate: "" };

export const TodoForm = ({ toggleAddingTodo }) => {
    const { formValues, handleInputChange, handleClearForm } = useForm(initialFormState)
    const { addTodo } = useContext(TodosContext)
    const [dateVisibility, setDateVisibility] = useState(false)
    const [tagsVisibility, setTagsVisibility] = useState(false)

    console.log(tagsVisibility)
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: nanoid(),
            name: formValues.name,
            completed: false,
            beingModified: false,
            tags: formValues.tags, //change when user is able to set them
            dueDate: "Apr 25"
        }
        if (newTodo.name) {
            addTodo(newTodo)
            toggleAddingTodo();
            handleClearForm(initialFormState)
        }
    }

    return (
        <Wrapper onSubmit={handleSubmit} >
            <InputWrapper>
                <Input
                    placeholder="e.g Do the rest of scrimba lessons"
                    autoComplete="off"
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={handleInputChange}
                    autoFocus
                />
                <ButtonsWrapper>
                    <Button type="button" secondary >
                        <Icon size='s'>
                            <FiCalendar />
                        </Icon> Calendar
                    </Button>
                    {dateVisibility && <Calendar

                        toggleVisibility={toggleDateVisibility} />}
                    <TagsSelect items={[
                        'Sport',
                        'Haibt',
                        'React',
                    ]} />
                    {/* <Button onClick={() => setTagsVisibility(true)} type="button" secondary >
                        <Icon size='s'>
                            <FiTag />
                        </Icon> Tags
                    </Button>
                    {tagsVisibility && <TagsSelect />} */}
                </ButtonsWrapper>

            </InputWrapper>
            <ButtonsWrapper>
                <Button type="submit" primary> Add Task</Button>
                <Button type="button" secondary onClick={() => toggleAddingTodo(false)} >Cancel</Button>
            </ButtonsWrapper>
        </Wrapper >
    )
}