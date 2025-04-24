import styles from "./style.module.css"
import Button from "../button/Button"

const OurTeam = () => {
    return (
        <div className={styles.team}>
            <h1>Join our Team</h1>
            <div><input type="text"placeholder="Name"/></div>
            <div><input type="email"placeholder="Email Address"/></div>
            <div><input type="text"placeholder="Phone"/></div>
            <div><input type="text"placeholder="Job Description"/></div>
            <div><input className={styles.attach} type="text"placeholder="Attach your Resume"/></div>
            <div className={styles.bton}>
            <Button text={"Get a job"}/>
            </div>
        </div>
    )
}

export  default OurTeam