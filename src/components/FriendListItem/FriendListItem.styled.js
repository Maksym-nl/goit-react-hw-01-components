import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 20px;
  border: 1px solid;
  color: black;
  padding: 15px;
  width: 342px;
  :hover {
    background: black;
    color: blue;
  }
`;

export const StatusItem = styled.span`
width: 25px;
height: 25px;
border: 1px solid black;
border-radius: 50%
background-color: ${props => {
    switch (props.status) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'yellow';
    }
  }};
`;

