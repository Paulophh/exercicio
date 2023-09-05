"use client";
import { Tarefa,  recuperarListagemTarefas } from "@/models/tarefa";
import React from 'react';
import { BoxListaDeTarefa, Container } from "./style";
import ItemTarefa from "../ItemTarefa";



export default () => {
    const [tarefas, setTarefas] = React.useState(recuperarListagemTarefas())

    

    return <Container>
              <BoxListaDeTarefa>
                {tarefas.map((tarefa : Tarefa) => {
                    return <ItemTarefa onRefresh={()=>setTarefas(recuperarListagemTarefas())} tarefa={tarefa}/>
                })}
                {/* {
                    JSON.stringify(tarefas)
                } */}
              </BoxListaDeTarefa>
    </Container>
        


} 

