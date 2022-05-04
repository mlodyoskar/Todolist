import { useContext } from "react"
import { Checkbox } from "components/Checkbox/Checkbox";
import { Wrapper, LeftColumn, RightColumn, TodoInfo, Name, ThreeDots, ThreeDotsWrapper } from "./TodoListItem.styles"
import { Tags } from "components/Tags/Tags";
import { DueDate } from "components/DueDate/DueDate";
import { TodosContext } from "providers/TodosProvider";
import { useToggle } from "hooks/useToggle"
import { TodoOptions } from "components/TodoOptions/TodoOptions"

const TodoListItem = ({ todo: { id, name, completed, dueDate, tags, beingModified } }) => {
    const { toggleComplete } = useContext(TodosContext)
    const [areOptionsVisible, setAreOptionsVisible] = useToggle()

    return (
        <Wrapper>
            <LeftColumn>
                <Checkbox done={completed} onClick={() => { toggleComplete(id) }}></Checkbox>
            </LeftColumn>
            <RightColumn>
                <Name done={completed} >{name}</Name>
                <TodoInfo>
                    <DueDate dueDate={dueDate} />
                    <Tags tags={tags} />
                </TodoInfo>
            </RightColumn>
            <ThreeDotsWrapper onClick={setAreOptionsVisible}>
                <ThreeDots />
                {areOptionsVisible && <TodoOptions id={id} />}
            </ThreeDotsWrapper>
        </Wrapper>
    );
}

export default TodoListItem;