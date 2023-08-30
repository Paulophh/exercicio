"use client";
import React from 'react';
import { Formik, Field, Form, FormikValues } from 'formik';
import { BoxFormulario, Container, StyledField, StyledLabel, StyledButton} from './style';
import * as Yup from "yup";
import dayjs from 'dayjs';
import { Tarefa } from '@/models/tarefa';

const FormSchema = Yup.object().shape({
    title: Yup.string()
      .min(4, 'O campo precisa de no minimo 4 caracter !')
      .max(50, 'O campo pode ter no maximo 50 caracters')
      .required('Requerido'),
    descricao: Yup.string()
      .min(4, 'O campo precisa de no minimo 4 caracter')
      .max(100, 'O campo pode ter no maximo 50 caracters')
      .required('Requirido'),
  });

export function Formulario() {
  const onSubmit = (tarefa: FormikValues) => {
    const txtCache = window.localStorage.getItem('BancoDeDados') || '[]';
    const listagemTarefas = JSON.parse(txtCache);
    listagemTarefas.push(tarefa);
    window.localStorage.setItem('BancoDeDados', JSON.stringify(listagemTarefas));
    console.log(tarefa);
  };

  return (
    <Container>
      <Formik
        initialValues={{
          title: '',
          descricao: '',
          status: 'fazendo',
          data: dayjs().format('YYYY-MM-DD'),
          
        }}
        validationSchema={FormSchema}

        onSubmit={onSubmit}
      >
        {({ values, errors, touched }) => (
          <Form>
            <BoxFormulario>
                <div>
                  <StyledLabel>Tarefa Título</StyledLabel>
                  <StyledField name="title" type="text" />
                  {errors.title && touched.title ? (
                     <div>{errors.title}</div>
                      ): null}
                </div>
                <div>
                  <StyledLabel>Tarefa Descrição</StyledLabel>
                  <StyledField name="descricao" type="text" />
                  {errors.descricao && touched.descricao ? (
                     <div>{errors.descricao}</div>
                      ): null}
                </div>
                <div>
                  <StyledLabel>Tarefa Status</StyledLabel>
                  <Field style={{backgroundColor:' #e6e1e1', padding:'10px', width:'100%'}}as="select" name="status">
                    <option value="fazendo">Fazendo</option>
                    <option value="pendente">Pendente</option>
                    <option value="concluido">Concluído</option>
                    <option value="cancelado">Cancelado</option>
                  </Field>
                </div>
                <div>
                  <StyledLabel>Tarefa Data</StyledLabel>
                  <StyledField name="data" type="date"/>
                </div>
                {JSON.stringify(values)}
                
              
              
              <StyledButton type="submit">Adicionar tarefa</StyledButton>
            </BoxFormulario>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Formulario;
