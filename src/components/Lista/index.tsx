import React from "react";
import { Item } from "./Item";
import style from "./Lista.module.scss";

function Lista() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "Typescript",
      tempo: "03:00:00",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            tarefa={item.tarefa}
            tempo={item.tempo}

            /* Forma alternativa
            {...item}
             Deve ser utilizada quando o escopo for menor
             para não acontecer de ir props indesejadas.*/
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
