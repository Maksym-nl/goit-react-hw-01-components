import styled from 'styled-components';


export const Avatar = styled.img`
  width: 355px;
    border-radius: 50%;
    background: antiquewhite;
    margin-top: 45px;
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
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;
export const StatsItem = styled.li`
    width: calc(100% / 4);
    font-size: 25px;
    display: flex;
    border: 1px solid black;
    border-radius: 4px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    background-color: aliceblue;
    padding: 15px;
`;

export const Quantity = styled.span`
font-weight: 700;
`