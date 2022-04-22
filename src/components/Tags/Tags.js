import { FiTag } from "react-icons/fi";
import styled from "styled-components"

const Tag = styled.span`
    display: flex;
    align-items: center;
    justify-items: center;
    font-size: 0.8rem;
    padding: 0 0.4rem;
    background-color: rgba(70,130,180, 0.5);
    border-radius: 10px;
    margin: 0 0.2rem;
`;

const TagIcon = styled(FiTag)`
    margin-right: 0.2em;
`;

export const Tags = ({ tags }) => (
    tags.map(tag => <Tag key={tag}><TagIcon />{tag}</Tag>)
)