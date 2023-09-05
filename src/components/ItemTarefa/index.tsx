"use client";
import { StatusTarefa, Tarefa,  deletarPeloNome, recuperarListagemTarefas, salvarListagemTarefas } from "@/models/tarefa";
import { Container, CheckTasks, TitleTask, Control, DescriptionTask, ButtonsTask } from "./style";
import dayJS from 'dayjs';
import {BsFillTrashFill} from 'react-icons/bs'
import {LuEdit2} from 'react-icons/lu'
import { useState } from "react";


export default ({tarefa, onRefresh}:{tarefa:Tarefa, onRefresh: Function}) => {
  const [status, setStatus] = useState(tarefa.status)
  const [editar, setEditarTarefas] = useState(false)
  


  const excluirTarefa = () => {
       deletarPeloNome(tarefa.id)

       onRefresh()    
  } 

  const atualizarStatus = (novoStatus : StatusTarefa) => {
    
      setStatus(novoStatus);
      const tarefaAtualizada = { ...tarefa, status: novoStatus };
      salvarListagemTarefas(
        recuperarListagemTarefas().map((tarefaItem: Tarefa) =>
          tarefaItem.id === tarefa.id ? tarefaAtualizada : tarefaItem
        )
      );
      onRefresh();
  }

  const editarTarefa = (tarefaEditada : Tarefa) => {
      

  }


    return <Container>
             <Control>
              <CheckTasks>
                <span className={"oswald-font"}>Tasks * Reminder * Data : {dayJS(tarefa.date).format("DD/MM/YYYY")}</span>
                </CheckTasks>
                <TitleTask>
                  <span>Titulo : {tarefa.title}</span>
                </TitleTask>
                <DescriptionTask>
                 <span>Descrição: {tarefa.descricao}</span>
                </DescriptionTask>
                <ButtonsTask>
                  <span>Status: {tarefa.status}</span>
                  <br></br>
                  <button className="botao" onClick={() => atualizarStatus(StatusTarefa.PENDENTE)}>Pendente</button>
                  <button className="botao" onClick={() => atualizarStatus(StatusTarefa.FEITO)}>Feito</button>
                  <button className="botao" onClick={() => atualizarStatus(StatusTarefa.FAZENDO)}>Fazendo</button>
                  <button className="botao" onClick={() => atualizarStatus(StatusTarefa.CANCELADO)}>Cancelado</button>
                  <button className="botao" onClick={excluirTarefa}><BsFillTrashFill></BsFillTrashFill></button>
                  <button className="botao"><LuEdit2></LuEdit2></button>
                </ButtonsTask>
                </Control>
                {/* {
                  JSON.stringify(tarefa)
                } */}
              
             </Container>



              
}

