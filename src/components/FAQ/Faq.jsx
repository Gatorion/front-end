//import
import styles from "./Faq.module.css"

//funcao
function Faq() {
    return (
        <div className={styles.Conteudo}>
            <div className={styles.Titulo}>
                <h1>Dúvidas <span>frequentes</span></h1>
            </div>
            <div className={styles.Faq}>
                <hr />
                <h4>1. Para quem é A Gatorion? </h4>
                <p>A Gatorion é para todos que desejam aprender mais sobre astronomia de forma acessível, em português.
                    Criamos essa plataforma porque sentimos falta de comunidades ativas e conteúdos confiáveis na área,
                    e queremos compartilhar conhecimento com quem também ama explorar o universo.</p>

                <hr />

                <h4>2. Quais são as formas de pagamento?</h4>
                <p>Aceitamos cartões de crédito e débito para facilitar o acesso à plataforma.</p>

                <hr />

                <h4>3. É possível cancelar a qualquer momento?</h4>
                <p>Sim! Você pode cancelar sua assinatura a qualquer momento, desde que não haja débitos pendentes.</p>

                <hr />

                <h4>4. Existem outras plataformas como a Gatorion?</h4>
                <p>Não. Somos pioneiros em oferecer uma rede social voltada exclusivamente para conteúdos dinâmicos e colaborativos sobre astronomia.</p>
            </div>
        </div>
    );
}

/* 
TODO: 
Implementar um componente para cada pergunta e passar os valores por props.
*/
// exportação
export default Faq
