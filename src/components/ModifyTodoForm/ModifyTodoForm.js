import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Icon } from "components/Icon/Icon";
import { FiCalendar, FiTag } from "react-icons/fi";


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


export const ModifyTodoForm = ({ todo, formValues, handleInputChange, toggleBeingModified, handleSubmit }) => {
    return (

        <Wrapper onSubmit={(e) => handleSubmit(e, todo.name)} >
            <InputWrapper>
                <Input
                    placeholder="e.g Do the rest of scrimba lessons"
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
                <Button type="submit" primary onClick={(e) => handleSubmit(e, todo.id, todo.name)} >Edit Todo</Button>
                <Button type="button" secondary onClick={() => toggleBeingModified(todo.id)} >Cancel</Button>
            </ButtonsWrapper>
        </Wrapper >
    )
}