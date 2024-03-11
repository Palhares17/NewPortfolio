import React from 'react';
import styles from './intro.module.css';
import { ArrowDown } from '@phosphor-icons/react';

function Intro() {
	return (
		<section className={styles.intro}>
			<h1 className={styles.title}>
				Desenvolvedor <span className={styles.gradient}>Front-end</span> & <br></br><span className={styles.gradient}>UI/UX Designer</span>
			</h1>
			<p className={styles.text}>Posso impulsionar o seu crescimento com experiências incríveis na web. Se deseja destacar o seu trabalho para o mundo, vamos conversar.</p>

			<span className={styles.icon}>
				<ArrowDown size={32} />
			</span>
		</section>
	);
}

export default Intro;