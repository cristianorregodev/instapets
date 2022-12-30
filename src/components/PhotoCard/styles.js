import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const Article = styled.article`
  min-height: 250px;
`;
export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 300px;
  overflow: hidden;
  position: relative;
  width: 95%;
  margin: 0 auto;
`;

export const Image = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;
