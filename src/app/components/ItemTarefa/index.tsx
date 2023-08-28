"use client";
import { Tarefa } from "@/app/models/tarefa";
import { Container, CheckTasks, TitleTask, Control, DescriptionTask, ButtonsTask } from "./style";
import dayJS from 'dayjs';
import {FiCheck} from 'react-icons/fi';
import {Oswald} from "next/font/google";


export default ({tarefa}:{tarefa:Tarefa}) => {



    return <Container>
             <Control>
              <CheckTasks>
                <FiCheck size={35}/>
                <p className={"oswald-font"}>Tasks * Reminder *</p>
                 <p>Data : {dayJS(tarefa.date).format("DD/MM/YYYY")}</p>
                </CheckTasks>
                <TitleTask>
                  <p>Titulo : {tarefa.title}</p>
                </TitleTask>
                <DescriptionTask>
                 <p>Descrição: {tarefa.descricao}</p> 
                </DescriptionTask>
                <ButtonsTask>
                  <button className="botao">Pendente</button>
                  <button className="botao">Feito</button>
                  <button className="botao">Fazendo</button>
                  <button className="botao">Cancelado</button>
                </ButtonsTask>
                </Control>
                {/* {
                  JSON.stringify(tarefa)
                } */}
              
             </Container>

// descricao: {tarefa.descricao}
// data : {dayJS(tarefa.date).format("DD/MM/YYYY")}
// status : {tarefa.status}
// title : {tarefa.title}
        


} 

