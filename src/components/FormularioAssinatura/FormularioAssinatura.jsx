import React from 'react';
import styles from './FormularioAssinatura.module.css';

const FormularioAssinatura = () => {
    return (
        <div className={styles.AssinaturaContainer}>
            <h2>Complete sua Assinatura do Plano</h2>
            <div className={styles.FormularioEResumo}>
                <div className={styles.Formulario}>
                    <h2>Informe seus Dados</h2>
                    <div className={styles.Linha}>
                        <div className={styles.CampoFormulario}>
                            <label htmlFor="nome">Nome Completo</label>
                            <input type="text" id="nome" name="nome" placeholder="Nome Completo" />
                        </div>

                        <div className={styles.CampoFormulario}>
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" id="cpf" name="cpf" placeholder="CPF" />
                        </div>
                    </div>

                    <div className={styles.Linha}>
                        <div className={styles.CampoFormulario}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" placeholder="E-mail" />
                        </div>

                        <div className={styles.CampoFormulario}>
                            <label htmlFor="celular">Celular</label>
                            <input type="text" id="celular" name="celular" placeholder="Celular" />
                        </div>
                    </div>

                    <hr />

                    <h2>Informe os Dados do Cartão</h2>

                    <div className={styles.Linha}>
                        <div className={styles.CampoFormulario}>
                            <label htmlFor="numero-cartao">Número do Cartão</label>
                            <input type="text" id="numero-cartao" name="numero-cartao" placeholder="Número do Cartão" />
                        </div>

                        <div className={styles.CampoFormulario}>
                            <label htmlFor="expiracao">Data de Expiração</label>
                            <input type="text" id="expiracao" name="expiracao" placeholder="Data de Expiração" />
                        </div>
                    </div>

                    <div className={styles.Linha}>
                        <div className={styles.CampoFormulario}>
                            <label htmlFor="cvv">Código de Segurança (CVV)</label>
                            <input type="text" id="cvv" name="cvv" placeholder="CVV" />
                        </div>

                        <div className={styles.CampoFormulario}>
                            <label htmlFor="nome-cartao">Nome no Cartão</label>
                            <input type="text" id="nome-cartao" name="nome-cartao" placeholder="Nome no Cartão" />
                        </div>
                    </div>
                </div>

                <div className={styles.ResumoPlano}>
                    <h3>Resumo do Plano</h3>
                    <p>
                        <strong>MENSAL</strong> <span className={styles.Preco}>R$ 10</span>
                    </p>
                    <div className={styles.PlanoContainer}>
                        <div className={styles.PlanoBox}>
                            <h4>PLENO</h4>
                            <ul>
                                <li>✔ Conteúdo astronômico</li>
                                <li>✔ Comunidade astronômica</li>
                                <li>✔ Editar posts</li>
                                <li>✔ Personalizar fundo de perfil</li>
                                <li>✔ Sem anúncios</li>
                                <li>✔ Acesso a todos os jogos</li>
                            </ul>
                        </div>

                        <button className={styles.BtnConfirmar}>CONFIRMAR PAGAMENTO</button>

                        <p className={styles.Termos}>
                            Garantimos o cancelamento gratuito em até 7 dias. Ao preencher o formulário você permite que a Gatorion salve{' '}
                            <a href="#">suas informações</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormularioAssinatura;