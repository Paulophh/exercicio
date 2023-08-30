import styled from "styled-components";
import { Form, Field } from 'formik';

export const Container = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 80px;
  background-color: #ccc;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxFormulario = styled.div`
  min-height: 300px;
  padding: 220px;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  gap: 20px;
`;

export const StyledField = styled(Field)`
  background-color: #e6e1e1;
  width: 100%; 
  padding: 10px;
`;

export const StyledLabel = styled.label`
  font-weight: bold; 
  margin-bottom: 6px; 
`;



export const StyledButton = styled.button`
  padding: 10px 20px; 
  border: none;
  background-color: aliceblue;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #98c1d9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
