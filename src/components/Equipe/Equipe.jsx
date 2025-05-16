import React from 'react'
import { CardIntegrante } from '../CardIntegrante/CardIntegrante'
import imgRafael from "../../assets/imgIntegrantes/Rafael.jpg.jpeg"
import styles from "./Equipe.module.css"

export const Equipe = () => {
  return (
    <section>

      <div class={styles.texto}>

        <div class={styles.principal}>
          <h1>O que é a <span>Gatorion</span>?</h1>
          <p>A Gatorion é uma StartUp que desenvolveu a plataforma digital homônima com o intuito de divulgar conteúdo sobre astronomia de forma acessível e divertida, com jogos, comunidade e artigos.</p>
        </div>

        <div class={styles.equipe}>
          <h1>Sobre a <span>EQUIPE</span></h1>
          <p>A equipe desenvolvedora é composta pelos PROANOS, alunos do curso de Desenvolvimento FullStack do instituto PROA.</p>

        </div>
        <CardIntegrante
          nome='Rafael Rios'
          imgIntegrante={imgRafael}
          ocupacao='Full-stack'
        />
      </div>
    </section>
  )
}
