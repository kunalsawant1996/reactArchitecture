import styled from "styled-components";
import { Field, Form } from 'formik';


export const Container = styled.div `
    display: flex;
    justify-content: center;`

export const Forms = styled(Form)
`
    display: flex;
    flex-direction: column;
    padding: 32px;
    margin: 85px auto;
    width: 250px;
    background: #1a1814;
`
export const Input = styled(Field)
`
margin: 9px 0;
`;

export const SubmitButton = styled.button `
width: 5rem;
margin-top: 8px;
`;

export const StyledErrorMessage = styled.span `
    background-color: rgb(165 153 153);
    color: rgb(247 6 6);
    white-space: pre-line;
    margin-bottom: 6px;
`;