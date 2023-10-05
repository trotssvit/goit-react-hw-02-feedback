import styled from 'styled-components';

export const Button = styled.button`
  width: 120px;
  height: 50px;
  font-size: 25px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
  cursor: pointer;
  margin-bottom: 25px;
  margin-top: 20px;
  margin-right: 5px;
`;
