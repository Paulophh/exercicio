"use client";
import { Tarefa, gerarMock } from "@/app/models/tarefa";
import React from 'react';
import { BoxListaDeTarefa, Container } from "./style";
import ItemTarefa from "../ItemTarefa";



export default () => {
    const [tarefas, setTarefas] = React.useState(gerarMock())

    

    return <Container>
              <BoxListaDeTarefa>
                {tarefas.map(tarefa => {
                    return <ItemTarefa tarefa={tarefa}/>
                })}
                {/* {
                    JSON.stringify(tarefas)
                } */}
              </BoxListaDeTarefa>
    </Container>
        


} 

