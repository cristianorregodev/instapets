import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img`
  width: 100px;
  margin: 10px auto;
`;
export const Form = styled.form`
  padding: 16px 10px 30px;
  box-shadow: -2px 0px 35px 2px rgba(17, 17, 26, 0.05);
  width: 90%;
  margin: 20px auto;
  border-radius: 10px;
`;

export const Title = styled.legend`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin: 20px auto;
`;
export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  height: 40px;
  padding: 3px 10px;
  font-size: 20px;
  color: gray;
  &[disabled] {
    opacity: 0.3;
  }
`;
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

export const Link = styled.button`
  color: blue;
  cursor: pointer;
  margin-top: 20px;
`;

export const Error = styled.span`
  font-size: 14px;
  max-width: 320px;
  color: red;
  text-align: center;
`;
