import React from 'react';
import { InstagramLogo, LinkedinLogo, Briefcase, Rocket, Code, PaperPlaneTilt } from '@phosphor-icons/react';
import styles from './header.module.css';

function Header() {
	const [isOpen, setIsOpen] = React.useState(true);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};
	
	return (
		<header className={styles.header}>
			<div className={styles.nav}>
				<div className={isOpen ? styles.active : ''}>
					<div className={styles.buttonNav} onClick={handleOpen}>
						<span className={styles.menu}></span>
						<span className={styles.menu}></span>
					</div>
				</div>

				<h2 className={styles.logo}>Matheus</h2>
			</div>
			
			{isOpen && (
				<nav className={styles.modal}>
					<ul className={styles.items}>
						<li><Briefcase size={24} className={styles.svg}/>Sobre</li>
						<li><Rocket size={24} />Projetos</li>
						<li><Code size={24} />Habilidades</li>
						<li><PaperPlaneTilt size={24} />Contato</li>
					</ul>
				</nav>
			) }
			

			<div className={styles.containerIcon}>
				<p className={styles.email}>mspalhares01@gmail.com</p>
				<span className={styles.divider}></span>
				<InstagramLogo size={24} color="#585858" />
				<LinkedinLogo size={24} color="#585858"/>
			</div>	
		</header>
	);
}

export default Header;
