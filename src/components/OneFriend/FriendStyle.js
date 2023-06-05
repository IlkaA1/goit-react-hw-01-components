import styled from 'styled-components';

export const Item = styled.li`
  background: rgb(152, 151, 151);
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid rgb(156, 156, 240);
  display: flex;
  align-items: center;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 30px;

  ${({ isOnline }) => {
    if (isOnline) {
      return `background-color: green`;
    } else return `background-color: red`;
  }}
`;

export const Name = styled.p`
  margin-left: 50px;
`;
