import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/NavBar.module.css"

export default function NavBar(){
	return(
		<nav className={styles.navBar}>
			<div className={styles.logo}>
				<Image src="/image/pokeball.png"  width="30" height="30" alt="pokenet"/>
				<h1>PokeNext</h1>
			</div>
			<ul className={styles.link_items}>
				<li>
					<Link href="/"><a>Home</a></Link>
				</li>
				<li>
					<Link href="/about"><a>Sobre</a></Link>
				</li>
			</ul>
		</nav>
	)
}