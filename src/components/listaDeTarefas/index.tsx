"use client";
import { Tarefa,  recuperarListagemTarefas } from "@/models/tarefa";
import React from 'react';
import { BoxListaDeTarefa, Container } from "./style";
import ItemTarefa from "../ItemTarefa";
import { useRouter } from 'next/navigation';


export default () => {
    const [tarefas, setTarefas] = React.useState(recuperarListagemTarefas())
    const router = useRouter()

    

    return <Container>
              <BoxListaDeTarefa>
              <button className="botao" onClick={() => router.push('/cadastro/novo')}>Adicionar nova tarefa</button>
              {tarefas.map((tarefa : Tarefa) => {
                    return <ItemTarefa onRefresh={()=>setTarefas(recuperarListagemTarefas())} tarefa={tarefa}/>
                })}
                {/* {
                    JSON.stringify(tarefas)
                } */}
              </BoxListaDeTarefa>
    </Container>
        


} 

