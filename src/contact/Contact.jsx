import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import React from 'react';
import styles from './contact.module.css';

function Contact() {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h4 className={styles.title}>Parabéns, você chegou até aqui,<br></br>que tal se a gente trabalhasse junto.</h4>
				<span className={styles.circle}></span>
				<p className={styles.text}>Se você está procurando alguém para criar projetos para ajudar a resolver o seu problema achou a pessoa certa. </p>
			</div>
			<div className={styles.content}>
				<h4 className={styles.title}>👇 Vamos trabalhar junto? </h4>
				<a href="#"><button className={styles.button}>SÓ CHAMAR</button></a>
				<div className={styles.containerIcon}>
					<p className={styles.email}>mspalhares01@gmail.com</p>
					<span className={styles.divider}></span>
					<InstagramLogo size={24} color="#8E8E8E" />
					<LinkedinLogo size={24} color="#8E8E8E" className={styles.icon}/>
				</div>	
			</div>
		</section>
	);
}

export default Contact;