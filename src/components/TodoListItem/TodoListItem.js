import { useState, useContext } from "react"
import { Checkbox } from "components/Checkbox/Checkbox";
import { Wrapper, LeftColumn, RightColumn, Date, Tag, TodoInfo, Name } from "./TodoListItem.styles"
import { BsThreeDotsVertical, BsFillTrashFill } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
import { TodosContext } from "providers/TodosProvider";

// const Options = ({ deleteTodo, toggleBeingModified }) => {
//     return (
//         <OptionsWrapper>
//             <Overlay />
//             <OptionsList>
//                 <OptionsListItem onClick={toggleBeingModified}>
//                     <FiEdit /> Edit
//                 </OptionsListItem>
//                 <OptionsListItem onClick={deleteTodo} delete >
//                     <BsFillTrashFill /> Delete
//                 </OptionsListItem>
//             </OptionsList>
//         </OptionsWrapper>
//     )
// }


const TodoListItem = ({ todo: { id, name, completed, dueDate, tags } }) => {
    const { toggleComplete } = useContext(TodosContext)
    console.log(dueDate)
    return (
        <Wrapper>
            <LeftColumn>
                <Checkbox done={completed} onClick={() => { toggleComplete(id) }}></Checkbox>
            </LeftColumn>
            <RightColumn>
                <Name>{name}</Name>
                <TodoInfo>
                    <Date dueDate={dueDate} />
                    {/* {todo.tags.map(tag => <TodoTag><TagIcon />{tag}</TodoTag>)} */}
                </TodoInfo>
            </RightColumn>
            {/* <ThreeDotsWrapper onClick={toggleOptionsVisibility}>
                <ThreeDots />
                {optionsVisible ? <Options toggleBeingModified={() => toggleBeingModified(todo.id)} deleteTodo={() => deleteTodo(todo.id)} /> : null}
            </ThreeDotsWrapper> */}
        </Wrapper>
    );
}

export default TodoListItem;