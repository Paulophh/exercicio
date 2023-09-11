"use client"



import dayjs from "dayjs";


export enum StatusTarefa {
    PENDENTE = "PENDENTE", FAZENDO = "FAZENDO", FEITO = "FEITO", CANCELADO = "CANCELADO"
}


export class Tarefa {
    public id : string = '';
    public descricao? : string;
    public status : StatusTarefa = StatusTarefa.PENDENTE;
    public data ? : Date;
    public title  : string = '';
   
}


export const recuperarListagemTarefas = () => {
    const txtCache = window.localStorage.getItem('BancoDeDados') || '[]';
    const listagemTarefas = JSON.parse(txtCache);

    return listagemTarefas;
}

export const salvarListagemTarefas = (tarefas : Tarefa[]) => {
    window.localStorage.setItem('BancoDeDados', JSON.stringify(tarefas))

}

export const deletarPeloNome = (id : string) => {
    //  let tarefas = recuperarListagemTarefas() 
    //  tarefas = tarefas.filter((tarefa : Tarefa) => tarefa.title != nome) 
    //  salvarListagemTarefas(tarefas)

    salvarListagemTarefas(
        recuperarListagemTarefas()
            .filter((tarefa : Tarefa) => tarefa.id != id) 
    )

}




