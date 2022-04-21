import styled from "styled-components"

const Wrapper = styled.span`
    padding-right: ${props => props.size === 's' ? '0.2rem'
        : props.size === 'm' ? '0.5rem' : ''};
`;

export const Icon = ({ children, size = 's' }) => (
    <Wrapper size={size}>
        {children}
    </Wrapper>
)