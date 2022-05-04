import React, { useState } from "react"
import { useSelect, useMultipleSelection } from 'downshift'
import { Button } from "components/Button/Button"
import { Icon } from "components/Icon/Icon"
import { FiTag } from "react-icons/fi"


export const TagsSelect = ({ items }) => {


    const {
        getSelectedItemProps,
        getDropdownProps,
        addSelectedItem,
        removeSelectedItem,
        selectedItems,
    } = useMultipleSelection({ initialSelectedItems: [] })

    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getMenuProps,
        highlightedIndex,
        getItemProps,
    } = useSelect({
        selectedItem: null,
        defaultHighlightedIndex: 0, // after selection, highlight the first item.
        items: selectedItems,
        stateReducer: (state, actionAndChanges) => {
            const { changes, type } = actionAndChanges
            switch (type) {
                case useSelect.stateChangeTypes.MenuKeyDownEnter:
                case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
                case useSelect.stateChangeTypes.ItemClick:
                    return {
                        ...changes,
                        isOpen: true, // keep the menu open after selection.
                    }
            }
            return changes
        },
        onStateChange: ({ type, selectedItem }) => {
            switch (type) {
                case useSelect.stateChangeTypes.MenuKeyDownEnter:
                case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
                case useSelect.stateChangeTypes.ItemClick:
                    if (selectedItem) {
                        addSelectedItem(selectedItem)
                    }
                    break
                default:
                    break
            }
        },
    })
    return (
        <div>
            {selectedItems.map((selectedItem, index) => (
                <span
                    // style={selectedItemStyles}
                    key={`selected-item-${index}`}
                    {...getSelectedItemProps({ selectedItem, index })}
                >
                    {selectedItem}
                    <span
                        // style={selectedItemIconStyles}
                        onClick={e => {
                            e.stopPropagation()
                            removeSelectedItem(selectedItem)
                        }}
                    >
                        &#10005;
                    </span>
                </span>
            ))}
            <Button
                onClick={() => setTagsVisibility(true)}
                type="button"
                secondary
                {...getToggleButtonProps(
                    getDropdownProps({ preventKeyAction: isOpen }),
                )}>
                <Icon size='s'>
                    <FiTag />
                </Icon> Tags
            </Button>
            <ul {...getMenuProps()} >
                {isOpen &&
                    getFilteredItems(items).map((item, index) => (
                        <li

                            key={`${item}${index}`}
                            {...getItemProps({ item, index })}
                        >
                            {item}
                        </li>
                    ))}
            </ul>
        </div>
    )
}