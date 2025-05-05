import styles from './Home.module.css';

import Button from '../../components/Button/Button';
import CardContent from '../../components/CardContent/CardContent';

import ContainerSearchIcon from '../../assets/img/ContainerSearchIcon.svg';
import ContainerPlayIcon from '../../assets/img/ContainerPlayerIcon.svg';
import ContainerBookIcon from '../../assets/img/ContainerBookIcon.svg';

const Home = ()=>{
    return(
        <main>
            <section className={styles.firstSection}>
                <h1>Desenvolva Seus <br /> Estudos em <span className={styles.highlightText}>Astronomia</span></h1>
                <p>Se conecte com profissionais de astronomias, estudantes <br /> e aprenda com nossos jogos e materiais de estudos.</p>
                <Button content="VER PLANOS" link="#"/>
                <div className={styles.containerCards}>
                    <CardContent icon={ContainerSearchIcon} title="ESTUDO" content="Materiais descritivos e pesquisas (em português)."/>
                    <CardContent icon={ContainerPlayIcon} title="JOGOS" content="Plataforma gameficada com conteúdo astronômico."/>
                    <CardContent icon={ContainerBookIcon} title="ARTIGOS" content="Artigos científicos sobre o espaço (em português)."/>
                </div>
            </section>
            <section className={styles.secondSection}>
                <div className="content">
                    <h2>Conecte-se com outros viajantes</h2>
                    <p>Se conecte com outros estudantes ou com um profissional da área.</p>
                    <Button content='VER PLANOS' link='#'/>
                </div>
            </section>
        </main>
    );
}

export default Home;