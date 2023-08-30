"use client";
import { Tarefa, atualizarStatus, deletarPeloNome } from "@/models/tarefa";
import { Container, CheckTasks, TitleTask, Control, DescriptionTask, ButtonsTask } from "./style";
import dayJS from 'dayjs';
import {BsFillTrashFill} from 'react-icons/bs'


export default ({tarefa, onRefresh}:{tarefa:Tarefa, onRefresh: Function}) => {

  const excluirTarefa = () => {
       deletarPeloNome(tarefa.title)

       onRefresh()    
  } 

  const atualizarStatusTarefa = () => {
    
    onRefresh()

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
                  <span>Status: {tarefa.status?.toUpperCase()}</span>
                  <br></br>
                  <button className="botao">Pendente</button>
                  <button className="botao">Feito</button>
                  <button className="botao">Fazendo</button>
                  <button className="botao">Cancelado</button>
                  <button className="botao" onClick={excluirTarefa}><BsFillTrashFill></BsFillTrashFill></button>
                </ButtonsTask>
                </Control>
                {/* {
                  JSON.stringify(tarefa)
                } */}
              
             </Container>




} 

