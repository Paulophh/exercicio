"use client";
import React, { useEffect } from 'react';
import {useState} from 'react';
import { Formik, Field, Form, FormikValues } from 'formik';
import { BoxFormulario, Container, StyledField, StyledLabel, StyledButton} from './style';
import * as Yup from "yup";
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { StatusTarefa, Tarefa, recuperarListagemTarefas, salvarListagemTarefas } from '@/models/tarefa';
import { useParams, useRouter } from 'next/navigation';

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
  const [fields, setFields] = useState<null | any >(null)
  const router = useRouter()
  const params = useParams()
  const onLoad = async () => {
    console.log(params)
    if(params.id != 'novo' ){
      const tarefasListagem = recuperarListagemTarefas()
      const tarefa = tarefasListagem.find(_tarefa  => _tarefa.id == params.id) 
      console.log(tarefa)
      setFields({
        id: tarefa.id,
        title: tarefa.title,
        descricao: tarefa.descricao,
        status: tarefa.status,
        data: tarefa.data,
        
      })

    }else {
      setFields({
        id: null,
        title: '',
        descricao: '',
        status: 'fazendo',
        data: dayjs().format('YYYY-MM-DD'),
        
      })
    }
  } 
  useEffect(() =>{
    onLoad() 
  }, [])



    const onSubmit = (tarefa: FormikValues) => {
      if (tarefa.id) {
      const txtCache = window.localStorage.getItem('BancoDeDados') || '[]';
      const listagemTarefas = JSON.parse(txtCache);
      const tarefaIndex = listagemTarefas.findIndex((tarefaItem : Tarefa) => tarefaItem.id === tarefa.id);
      if (tarefaIndex !== -1) {
        listagemTarefas[tarefaIndex] = tarefa;
        window.localStorage.setItem('BancoDeDados', JSON.stringify(listagemTarefas));
      }
    } else {
      tarefa.id = uuidv4();
      const txtCache = window.localStorage.getItem('BancoDeDados') || '[]';
      const listagemTarefas = JSON.parse(txtCache);
      listagemTarefas.push(tarefa);
      window.localStorage.setItem('BancoDeDados', JSON.stringify(listagemTarefas));
      
    }

    router.push('/listagem')
  
    console.log(tarefa);
  };
  

  return (
    <Container>
      {
        fields != null && 
      <Formik
        initialValues={
          fields
        }
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
                {
                  JSON.stringify(values)
                }
              
              <StyledButton type="submit">Edite a Tarefa</StyledButton>
            </BoxFormulario>
          </Form>
        )}
      </Formik>
    }
    </Container>
  );
}

export default Formulario;
