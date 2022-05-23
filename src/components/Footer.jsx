import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import styles from '../components/footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
                <li>
                    <FaGithub/>
                </li>
            </ul>
            <p className={styles.copyRight}>&copy;<span>Todos os direitos reservados. 2022</span></p>
        </footer>
    );
}