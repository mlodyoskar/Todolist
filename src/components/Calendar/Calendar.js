import { OverlayPopup, List, ListItem } from "components/OverlayPopup/OverlayPopup"
import { useCalendar } from "hooks/useCalendar"

export const Calendar = ({ toggleVisibility, }) => {
    return (
        <OverlayPopup toggleVisibility={toggleVisibility}>
            <List>
                <ListItem onClick={() => useCalendar()}>
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