import styled from 'styled-components'
export const List = styled.ul `
background-color: orange;
display: 'flex';
flex-wrap: wrap;
gap: 20px
`;

export const ListItem = styled.li `
width: 100px;
font-size: 50px;
:hover{
    background-color: black;
    color: blue;
}
`;

export const Avatar = styled.img `
width: 150px;
`;