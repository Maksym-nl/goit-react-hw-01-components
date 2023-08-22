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
  
`;
export const Item = styled.li`
 display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    color: black;
    border-radius: 4px;
    padding: 15px;
      width: calc(100% / 5);
      background-color: ${props => {
    return `#${Math.floor((Math.random() * 1677215) / props.color)
      .toString(16)
      .padStart(6, 0)}`;
  }};

    
`;
