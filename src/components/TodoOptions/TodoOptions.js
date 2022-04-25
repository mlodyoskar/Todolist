import { useContext } from "react"
import { Icon } from "components/Icon/Icon"
import { List, ListItem, OverlayWrapper, Overlay } from "components/OverlayPopup/OverlayPopup"
import { FiEdit, FiTrash } from "react-icons/fi"
import { TodosContext } from "providers/TodosProvider"

export const TodoOptions = ({ toggleVisibility, id }) => {
    const { deleteTodo, toggleBeingModified } = useContext(TodosContext)
    return (
        <OverlayWrapper>
            <Overlay onClick={toggleVisibility} />
            <List>
                <ListItem onClick={() => toggleBeingModified(id)}>
                    <Icon><FiEdit /></Icon> Edit
                </ListItem>
                <ListItem delete onClick={() => deleteTodo(id)}>
                    <Icon><FiTrash /></Icon> Delete
                </ListItem>
            </List>
        </OverlayWrapper>
    )
}