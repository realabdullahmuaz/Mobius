import Image from "next/image"
import Button from "../button/Button"
import styles from "./style.module.css"
import Logo from "@/assets/png/Logo.png"
import Vector from "@/assets/png/Vector.png"

const NavBar = () => {
	return (

		<div className={styles.nav}>

			<div className={styles.logo}>
				<Image src={Logo} alt="Logo" width={40} height={40} />
			</div>

			<div className={styles.vector}>
				<Image src={Vector} alt="Vector" />
			</div>

			<div className={styles.link}>
				<p>Home</p>
				<p>Case Studies</p>
				<p>Careers</p>
				<Button text="Get in Touch" />
			</div>

		</div>
	)
}

export default NavBar