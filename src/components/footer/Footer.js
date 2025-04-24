import Image from "next/image"
import styles from "./style.module.css"
import Facebok from "@/assets/png/Facebok.png"
import Instagram from "@/assets/png/instagram.png"
import Linkedin from "@/assets/png/Linkedin.png"

const Footer = () => {
	return (
		<>
			<div className={styles.footer}>
				<div>
					<h1>Get in Touch</h1>
					<hr className={styles.hr} />
					<p>Email us at hr@mobiusmotionstudio.com</p>
					<p>Call us at +92 307 4567890</p>
				</div>
				<div className={styles.address}>
					<h1>Address</h1>
					<hr className={styles.hr} />
					<p>392, F Block Johar Town, Lahore, Punjab, Pakistan</p>
				</div>
				<div>
					<h1>Studio</h1>
					<hr className={styles.hr} />
					<p>Terms of Condition</p>
					<p>Privacy Policy</p>
				</div>
				<div className={styles.newsletter}>
					<h1>Newsletter</h1>
					<hr className={styles.hr} />
					<p>Receive the latest trend updates directly in your inbox.</p>
					<div><input className={styles.news} type="email" placeholder="Enter your email" /></div>
					<div className={styles.submit}>
						Submit
					</div>
				</div>
			</div>

			<div className={styles.foot}>
				<Image src={Facebok} alt="Facebok"  height={50} width={50}/>
				<Image src={Instagram} alt="Instagram" height={50} width={50}/>
				<Image src={Linkedin} alt="Linkedin" height={50} width={50} />	
			</div>
			<div className={styles.rights}>
				<p>© 2023 MMS | Mobius Motion Studio. All rights reserved. </p>
			</div>
		</>

	)
}


export default Footer