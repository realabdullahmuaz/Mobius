import OurTeam from "../ourteam/OurTeam"
import styles from "./style.module.css"


const Card = ({ title, discription }) => {
  return (
    <div className={styles.main}>
      <div className={styles.video}>
        <h1>{title}</h1>
        <p>Full Time Job</p>
      </div>
      <div className={styles.div}></div>
      <div className={styles.ments}>
        <h1>Requirements</h1>
        <p>{discription}</p>
      </div>
    </div>
  )
}

const MainSection = () => {
  return (
    <div className={styles.mainsection}>
      <div>
        <Card title="Video Animator" discription="Graduated in Computer science, Engineering, any equivalent Degree, having experience of 2-3 years." />
        <Card title="3D Artist" discription="Graduated in Computer science, Engineering, any equivalent Degree, having experience of 4-5 years." />
        <Card title="CG Artist" discription="Graduated in Computer science, Engineering, any equivalent Degree, having experience of 6-7 years." />
      </div>
      <OurTeam />
    </div>

  )
}

export default MainSection