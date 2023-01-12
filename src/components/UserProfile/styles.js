import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 30px;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin: 0;
`;
