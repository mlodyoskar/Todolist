import React, { useState, useReducer } from "react"

const actionTypes = {
    inputChange: 'INPUT CHANGE',
    clearValues: 'CLEAR VALUES',
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.inputChange:
            return {
                ...state,
                [action.field]: action.value
            }
        case actionTypes.clearValues:
            return { ...action.initialValues }
    }
}

export const useForm = (initialValues) => {
    const [formValues, dispatch] = useReducer(reducer, initialValues)

    const handleInputChange = (e) => {
        dispatch({
            type: actionTypes.inputChange,
            field: e.target.name,
            value: e.target.value
        })
    }

    const handleClearForm = () => {
        dispatch({
            type: actionTypes.clearValues, initialValues
        })
    }

    return { formValues, handleInputChange, handleClearForm }
}
