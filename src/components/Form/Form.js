import React from 'react';
import { Input } from "../atoms/Input/Input";


export const Form = ({ handleAddTodo, handleInputChange, formValues }) => {
    return (
        <form className="add" onSubmit={handleAddTodo} autocomplete="off">
            <Input
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Add new todo"
            />
        </form>
    )
}
