import { Icon } from "components/Icon/Icon";
import React, { useState } from "react";
import { FiCalendar, FiTag } from "react-icons/fi";
import styled from "styled-components";
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Calendar } from "components/Calendar/Calendar";

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



export const TodoForm = ({ formValues, setFormValues, handleInputChange, handleSubmit, toggleAddingTodo }) => {
    const [dateVisibility, setDateVisibility] = useState(false);

    const toggleDateVisibility = () => {
        setDateVisibility(oldVisibility => !oldVisibility)
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
                    <Button onClick={toggleDateVisibility} type="button" secondary >
                        <Icon size='s'>
                            <FiCalendar />
                        </Icon> Calendar
                    </Button>
                    {dateVisibility && <Calendar

                        toggleVisibility={toggleDateVisibility} />}

                    <Button type="button" secondary >
                        <Icon size='s'>
                            <FiTag />
                        </Icon> Tags
                    </Button>
                </ButtonsWrapper>

            </InputWrapper>
            <ButtonsWrapper>
                <Button type="submit" primary> Add Task</Button>
                <Button type="button" secondary onClick={toggleAddingTodo} >Cancel</Button>
            </ButtonsWrapper>
        </Wrapper >
    )
}