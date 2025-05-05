import styles from './Home.module.css';

import Button from '../../components/Button/Button';
import CardContent from '../../components/CardContent/CardContent';
import CardContentThirdSection from '../../components/CardContentThirdSection/CardContentThirdSection';

import ContainerSearchIcon from '../../assets/img/ContainerSearchIcon.svg';
import ContainerPlayIcon from '../../assets/img/ContainerPlayerIcon.svg';
import ContainerBookIcon from '../../assets/img/ContainerBookIcon.svg';
import SecondSectionAstronauts from '../../assets/img/SecondSectionAstronauts.svg';
import IconBrain from '../../assets/img/iconBrain.svg';
import IconPerson from '../../assets/img/iconPerson.svg';
import IconWeb from '../../assets/img/iconWeb.svg';
import ThirdSectionAstronaut from '../../assets/img/thirdSectionAstronaut.svg';
import ThirdSectionObservatory from '../../assets/img/thirdSectionObservatory.svg';

const Home = () => {
    return (
        <main>
            <section className={styles.firstSection}>
                <h1>Desenvolva Seus <br /> Estudos em <span className={styles.highlightText}>Astronomia</span></h1>
                <p>Se conecte com profissionais de astronomias, estudantes <br /> e aprenda com nossos jogos e materiais de estudos.</p>
                <Button content="VER PLANOS" link="#" />
                <div className={styles.containerCards}>
                    <CardContent icon={ContainerSearchIcon} title="ESTUDO" content="Materiais descritivos e pesquisas (em português)." />
                    <CardContent icon={ContainerPlayIcon} title="JOGOS" content="Plataforma gameficada com conteúdo astronômico." />
                    <CardContent icon={ContainerBookIcon} title="ARTIGOS" content="Artigos científicos sobre o espaço (em português)." />
                </div>
            </section>
            <section className={styles.secondSection}>
                <div className={styles.content}>
                    <h2><span className={styles.highlightText}>Conecte-se</span> com outros viajantes</h2>
                    <p>Se conecte com outros estudantes ou com um profissional da área.</p>
                    <Button content='VER PLANOS' link='#' />
                </div>
                <img src={SecondSectionAstronauts} alt="" />
            </section>
            <section className={styles.thirdSection}>
                <div className={styles.containerContent}>
                    <CardContentThirdSection icon={IconWeb} title='MANTENHA-SE ATUALIZADO' content='Além de aprender o que já foi descoberto, fique por dentro das novidades e dos próximos eventos que vão acontecer.' />
                    <CardContentThirdSection icon={IconPerson} title='COMPARTILHE CONHECIMENTO' content='Compartilhe suas próprias descobertas e teorias  conosco; inicie bate-papos e discussões.' />
                    <CardContentThirdSection icon={IconBrain} title='CONHEÇA PROFISSIONAIS' content='Se conecte com profissionais da área, verificados pela plataforma e interaja com suas publicações.' />
                </div>
                <div className={styles.containerContent}>
                    <div className={styles.text}>
                        <h2><span className={styles.highlightText}>Explore</span> o espaço <br /> enquanto aprende</h2>
                        <p>Aprenda sobre o cosmos de forma divertida com missões, desafios e conquistas que fazem cada descoberta valer a pena.</p>
                        <Button content='VER PLANOS' link='#' />
                    </div>
                    <img src={ThirdSectionAstronaut} alt="" />
                </div>
                <div className={styles.containerContent}>
                    <img src={ThirdSectionObservatory} alt="" />
                    <div className="text">
                        <h2>Explore com nosso <span className={styles.highlightText}>observatório</span></h2>
                        <p>Através do modelo 3D  observe todo o universo em tempo real ou simule outras datas.</p>
                        <Button content='CRIAR CONTA' link='#' />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;