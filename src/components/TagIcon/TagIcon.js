import { AiFillTag } from "react-icons/ai"
import styled from "styled-components";

const TagWrapper = styled.span`
    display: flex;
    align-items: center;
    padding-right: 0.4em;
`;

export const TagIcon = () => {
    return (
        <TagWrapper>
            <AiFillTag />
        </TagWrapper>
    )
}