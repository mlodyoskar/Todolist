import styled from "styled-components";
import PropTypes from "prop-types";

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  border: ${(props) =>
    props.primary ? "none" : props.secondary ? "1px solid black" : "#123456"};
  color: ${(props) => (props.primary ? "white" : "black")};
  border-radius: 0.5em;
  padding: 0.6em;
  margin: 0 0.8em;
  margin-left: 0;
  font-size: 0.8rem;
  background-color: ${(props) =>
    props.primary
      ? "rgba(70,130,180, 1)"
      : props.secondary
      ? "white"
      : "#123456"};
`;
