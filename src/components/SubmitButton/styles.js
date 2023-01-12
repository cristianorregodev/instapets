import styled from "styled-components";

export const Button = styled.button`
  background-color: #f0f;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  &[disabled] {
    opacity: 0.3;
  }
`;
