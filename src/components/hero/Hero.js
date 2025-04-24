import NavBar from "../navbar/NavBar";
import styles from "./style.module.css"

const Hero = () => {
    return (
        <div className={styles.wanna}>
            <NavBar />
            <div className={styles.join}>
                <h1>Wanna Join</h1>
                <h2>Mobius Motion Studios?</h2>
                <p>Discover Your Career Path, Elevate Your Prospects. Here Are Some Job Vacancies For You, Apply Now!</p>
            </div>
        </div>

    )
}

export default Hero