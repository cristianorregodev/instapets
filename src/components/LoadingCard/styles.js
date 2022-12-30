import styled from "styled-components";

export const Article = styled.article`
  min-height: 250px;
  margin-top: 10px;
`;
export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 300px;
  overflow: hidden;
  position: relative;
  width: 95%;
  margin: 0 auto;
  background: rgba(112, 112, 112, 1);
  background: linear-gradient(
    49deg,
    rgba(112, 112, 112, 0.5) 0%,
    rgba(125, 125, 125, 0.5) 35%,
    rgba(186, 186, 186, 0.5) 100%
  );
`;
export const Image = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 0.2;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 0 0 10px;
  cursor: pointer;
`;

export const Icon = styled.div`
  margin-right: 4px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgb(112, 112, 112);
  background: linear-gradient(
    49deg,
    rgba(112, 112, 112, 0.5) 0%,
    rgba(125, 125, 125, 0.5) 35%,
    rgba(186, 186, 186, 0.5) 100%
  );
`;

export const Likes = styled.p`
  width: 100px;
  height: 16px;

  border-radius: 10px;
  background: rgb(112, 112, 112);
  background: linear-gradient(
    49deg,
    rgba(112, 112, 112, 0.5) 0%,
    rgba(125, 125, 125, 0.5) 35%,
    rgba(186, 186, 186, 0.5) 100%
  );
`;
