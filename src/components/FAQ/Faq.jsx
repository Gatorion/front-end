//import
import styles from "./Faq.module.css"

//funcao
function Faq() {
    return (
        <main>
            <div className={styles.Conteudo}>
                <div className={styles.Titulo}>
                    <h1>Dúvidas <span>frequentes</span></h1>
                </div>
                <div className={styles.Faq}>
                    <hr />
                    <h4>1. Para quem é o gatorion? </h4>
                    <p>Para nós, que queremos aprender mais sobre astronomia e não encontramos fontes em português, conversar sobre o assunto, mas só achamos comunidades inativas e gostamos de compartilhar conhecimento.</p>

                    <hr />

                    <h4>2. Quais as formas de pagamento?</h4>
                    <p>Através do cartão de crédito ou débito.</p>

                    <hr />

                    <h4>3. É possível cancelar?</h4>
                    <p>Sim! A qualquer momento o usuário pode solicitar o cancelamento, desde que não sejam verificados débitos em aberto.</p>

                    <hr />

                    <h4>4. Existem outras plataformas como essa?</h4>
                    <p>Não, somos a primeira plataforma a focar em uma rede social com conteúdos dinâmicos para o estudo de astronomia.</p>
                </div>
            </div>
        </main>
    );
}
//export
export default Faq
