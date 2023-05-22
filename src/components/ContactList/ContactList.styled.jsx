import { styled } from "styled-components";

export const List = styled.ul`
    margin-top: 20px;
    list-style: disc;
    padding-left: 30px;
`
export const Button = styled.button`
   margin-left: 20px;
   padding: 3px 10px;
   border-radius: 5px;
   border-style: none;
   background-color: lightcoral;
   color: #140f2f;

   &:hover{
    background-color: cyan;
   }
   
`
export const Item = styled.li`
    padding-bottom: 10px;
`