import styled from "styled-components";
import { Link as NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  width: 320px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  max-width: 320px;
  text-align: center;
`;

export const Link = styled(NavLink)`
  margin-top: 20px;
  text-decoration: none;
  padding: 14px;
  background-color: #ff00ff;
  color: white;
  border-radius: 6px;
  font-weight: bold;
`;
