import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 25px;
  :hover, :focus {
    border-color: red;
    font-size: 35px; 
    border: 5px solid red;
    border-radius: 50px;
  }
`;
export const Item = styled.li`
width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  color: #FFFFFF;
  border-radius: 4px;
  padding: 15px;
     background-color: ${props => {
    return `#${Math.floor((Math.random() * 1677215))
      .toString(16)
      .padStart(6, 0)}`;
  }};
 
`;

