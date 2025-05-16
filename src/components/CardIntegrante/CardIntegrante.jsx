import React from 'react'
import styles from "./CardIntegrante.module.css"
import linkedinIcon from "../../assets/Icons/linkedin.svg"
import githubIcon from "../../assets/Icons/github.svg"

export const CardIntegrante = (props) => {
    return (
        <div class={styles.card}>

            <div class={styles.imagem}>
                <img src={props.imgIntegrante} alt="" />
            </div>

            <div class={styles.pessoa}>

                <h2>{props.nome}</h2>

                <div class={styles.conteudo}>
                    <p>{props.ocupacao}</p>

                    <div class={styles.links}>
                        <div class={styles.linkedin}>
                            <a href=""><img href="" src={linkedinIcon} alt="" /></a>
                        </div>
                        <div class={styles.github}>
                            <a href=""><img href="" src={githubIcon} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
