import styled from "styled-components";

export const Link = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  width: 31.33%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  background: rgba(112, 112, 112, 1);
  background: linear-gradient(
    49deg,
    rgba(112, 112, 112, 0.5) 0%,
    rgba(125, 125, 125, 0.5) 35%,
    rgba(186, 186, 186, 0.5) 100%
  );
`;

export const Grid = styled.article`
  padding-top: 32px;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.2;
`;
