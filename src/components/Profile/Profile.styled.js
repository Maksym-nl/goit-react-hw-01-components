import styled from 'styled-components';


export const Avatar = styled.img`
      /* width: 355px; */
      border-radius: 50%;
    background: antiquewhite;
    /* margin-top: 45px; */
    margin: 0 auto;
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${props => {
    return props.color
      }};
   
 
`;


export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 12px;
`;
export const StatsItem = styled.li`
    width: calc(100% / 3);
    font-size: 25px;
    display: flex;
    border: 1px solid black;
    border-radius: 4px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    background-color: aliceblue;
    padding: 15px;
`;

export const Quantity = styled.span`
font-weight: bold;
`