import LogoComSlogan from '../../assets/img/LogoSlogan.svg';
import InstagramIcon from '../../assets/img/instagramIcon.svg';
import FacebookIcon from '../../assets/img/facebookIcon.svg';
import GithubIcon from '../../assets/img/githubIcon.svg';
import LinkedinIcon from '../../assets/img/linkedinIcon.svg';
import styles from './Footer.module.css';
import SocialLink from '../SocialLink/SocialLink';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.containerLogoLink}>
                <img className={styles.logo} src={LogoComSlogan} alt="" />

                <div className={styles.containerLinks}>
                    <div className={styles.link}>
                        <h2>Suporte</h2>
                        <a href="">
                            Ajuda
                        </a>
                        <a href="">
                            Termos de Uso
                        </a>
                        <a href="">
                            Política de Privacidade
                        </a>
                    </div>
                    <div className={styles.link}>
                        <h2>Gatorion</h2>
                        <a href="">
                            Página Inicial
                        </a>
                        <a href="">
                            Planos
                        </a>
                        <a href="">
                            Sobre Nós
                        </a>
                    </div>
                    <div className={styles.link}>
                        <h2>Contato</h2>
                        gatorion.org@gmail.com
                    </div>
                </div>
            </div>
            <div className={styles.redesSociais}>
                <SocialLink icon={InstagramIcon} link="#" />
                <SocialLink icon={LinkedinIcon} link="#" />
                <SocialLink icon={GithubIcon} link="#" />
                <SocialLink icon={FacebookIcon} link="#" />
            </div>
            <p className={styles.copyright}>© 2025 Gatorion Inc. Todos os direitos reservados.</p>
        </div>
    )
}

export default Footer;