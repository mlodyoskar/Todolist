import { List, ListItem, OverlayWrapper, Overlay } from "components/OverlayPopup/OverlayPopup"

export const TodoOptions = ({ toggleVisibility }) => {
    return (
        <OverlayWrapper>
            <Overlay onClick={toggleVisibility} />
            <List>
                <ListItem>
                    Edit
                </ListItem>
                <ListItem>
                    Delete
                </ListItem>
            </List>
        </OverlayWrapper>
    )
}