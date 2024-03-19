import React from 'react';
import { InstagramLogo, LinkedinLogo, Briefcase, Rocket, Code, PaperPlaneTilt } from '@phosphor-icons/react';
import styles from './header.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';

function Header() {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{
				isOpen && <div className={styles.closeModal} onClick={() => setIsOpen(false)}></div>
			}
			<header className={styles.header}>
				<div className={styles.nav}>
					<div className={isOpen ? styles.active : ''} >
						<div className={styles.buttonNav} onClick={handleOpen}>
							<span className={styles.menu}></span>
							<span className={styles.menu}></span>
						</div>
					</div>
					
					<h2 className={styles.logo}>Matheus</h2>
				</div>
			
				{isOpen && (
					<>
						<nav className={styles.modal}>
							<ul className={styles.items}>
								<li>
									<Link
										activeClass="active"
										to="project"
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
										className={styles.link}
									>
										<Rocket size={24} />
										Projetos
									</Link>
								</li>
								<li>
									<Link
										activeClass="active"
										to="skills"
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
										className={styles.link}
									>
										<Code size={24} />Habilidades
									</Link>
								</li>
								<li>
									<Link
										activeClass="active"
										to="about"
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
										className={styles.link}
									>	
										<Briefcase size={24} className={styles.svg}/>
										Sobre
									</Link>
								</li>
								<li>
									<Link 
										activeClass="active"
										to="contact"
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
										className={styles.link}
									>
										<PaperPlaneTilt size={24} />Contato
									</Link>
								</li>
							</ul>
						</nav>
					</>
				) }
			

				<div className={styles.containerIcon}>
					<p className={styles.email}>mspalhares01@gmail.com</p>
					<span className={styles.divider}></span>
					<InstagramLogo size={24} color="#585858" />
					<LinkedinLogo size={24} color="#585858"/>
				</div>	
			</header>
		</>
	);
}

export default Header;
