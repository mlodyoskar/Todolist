import { FiTag } from "react-icons/fi";
import styled from "styled-components"
import { Icon } from "components/Icon/Icon";

const TodoTag = styled.span`
    height: 60%;
    display: flex;
    align-items: center;
    justify-items: center;
    font-size: 0.8rem;
    padding: 0 0.4rem;
    background-color: rgba(70,130,180, 0.5);
    border-radius: 10px;
    margin: 0 0.2rem;
`;

export const Tag = ({ name, size = 's' }) => (
    <TodoTag>
        <Icon size={size}>
            <FiTag />
        </Icon>{name}
    </TodoTag>
)
