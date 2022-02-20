import react, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../atoms/Button/Button"
import { Input } from "../../atoms/Input/Input"
import { CalendarIcon } from "../../atoms/CalendarIcon";
import { TagIcon } from "../../atoms/TagIcon";
import { Popup } from "../../atoms/Popup/Popup"


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


export const TodoForm = ({ formValues, handleInputChange, handleSubmit, toggleAddingTodo, toggleDateVisibility }) => {
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
                />
                <ButtonsWrapper>
                    <Button onClick={toggleDateVisibility} type="button" secondary >
                        <CalendarIcon /> Today
                    </Button>

                    <Button type="button" secondary >
                        <TagIcon /> Tags
                    </Button>
                </ButtonsWrapper>

            </InputWrapper>
            <ButtonsWrapper>
                <Button type="submit" primary >Add Task</Button>
                <Button type="button" secondary onClick={toggleAddingTodo} >Cancel</Button>
            </ButtonsWrapper>
        </Wrapper >
    )
}