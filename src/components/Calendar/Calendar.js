import { OverlayPopup, List, ListItem } from "components/OverlayPopup/OverlayPopup"

export const Calendar = ({ toggleVisibility }) => {
    return (
        <OverlayPopup toggleVisibility={toggleVisibility}>
            <List>
                <ListItem>
                    Today
                </ListItem>
                <ListItem>
                    Tomorrow
                </ListItem>
                <ListItem>
                    2 days from now
                </ListItem>
            </List>
        </OverlayPopup>
    )
}