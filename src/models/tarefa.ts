import dayjs from "dayjs";

export enum StatusTarefa {
    PENDENTE = "PENDENTE", FAZENDO = "FAZENDO", FEITO = "FEITO", CANCELADO = "CANCELADO"
}


export class Tarefa {
    public descricao? : string;
    public status : StatusTarefa = StatusTarefa.PENDENTE;
    public date ? : Date;
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

export const deletarPeloNome = (title : string) => {
    //  let tarefas = recuperarListagemTarefas() 
    //  tarefas = tarefas.filter((tarefa : Tarefa) => tarefa.title != nome) 
    //  salvarListagemTarefas(tarefas)

    salvarListagemTarefas(
        recuperarListagemTarefas()
            .filter((tarefa : Tarefa) => tarefa.title != title) 
    )

}



export const gerarMock = () => {
    const t1 = new Tarefa();
    t1.descricao = "Tarefa lavar a louça";
    t1.status = StatusTarefa.FAZENDO;
    t1.date = dayjs("2010-10-12").add(1, "day").toDate();
    t1.title = " Tarefa de Casa ";

    const t2 = new Tarefa();
    t2.descricao = "Tarefa lavar o carro";
    t2.status = StatusTarefa.FEITO;
    t2.date = dayjs("2013-1-12").add(1, "day").toDate();
    t2.title = " Tarefa de Casa ";

    const t3 = new Tarefa();
    t3.descricao = "Tarefa exercio de casa";
    t3.status = StatusTarefa.FAZENDO;
    t3.date = dayjs("2017-2-2").add(1, "day").toDate();
    t3.title = " Tarafa da Escola ";

    const t4 = new Tarefa();
    t4.descricao = "Tarefa ir passear com o cachorro";
    t4.status = StatusTarefa.CANCELADO;
    t4.date = dayjs("2018-17-1").add(1, "day").toDate();
    t4.title = " Tarefa Cachorro ";

    const t5 = new Tarefa();
    t5.descricao = "Tarefa lavar a moto";
    t5.status = StatusTarefa.PENDENTE;
    t5.date = dayjs("2018-3-12").add(1, "day").toDate();
    t5.title = " Tarefa de Casa ";

    const t6 = new Tarefa();
    t6.descricao = "Tarefa jogar ";
    t6.status = StatusTarefa.FEITO;
    t6.date = dayjs("2019-8-10").add(1, "day").toDate();
    t6.title = " Tarefa de Entreterimento ";

    const t7 = new Tarefa();
    t7.descricao = "Tarefa tomar a vacina";
    t7.status = StatusTarefa.CANCELADO;
    t7.date = dayjs("2020-8-11").add(1, "day").toDate();
    t7.title = " Tarefa Medicinal ";

    const t8 = new Tarefa();
    t8.descricao = "Tarefa tomar a vacina";
    t8.status = StatusTarefa.FEITO;
    t8.date = dayjs("2020-8-15").add(1, "day").toDate();
    t8.title = " Tarefa Medicinal ";

    const t9 = new Tarefa();
    t9.descricao = "Tarefa ir para a faculdade ";
    t9.status = StatusTarefa.FEITO;
    t9.date = dayjs("2021-5-11").add(1, "day").toDate();
    t9.title = " Aula da Faculdade";

    const t10 = new Tarefa();
    t10.descricao = "Tarefa tomar banho";
    t10.status = StatusTarefa.FEITO;
    t10.date = dayjs("2023-8-28").add(1, "day").toDate();
    t10.title = " Tarefa Higiene ";

    return [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];
}
 