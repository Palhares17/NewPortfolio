import React from 'react';
import styles from './project.module.css';
import Title from '../ComponentsLayout/title/Title';
import { Rocket } from '@phosphor-icons/react';
import { project } from './project';
// import Img from '../assets/img/projetoOrigamid.png';


function Project() {
	return (
		<section>
			<div className={styles.container}>
				<Title><Rocket className={styles.bgIcon} /> Alguns dos meus Projetos</Title>	
			</div>
			
			<main className={styles.grid}>
				{project.map(item => {
					return (
						<img key={item.title} src={item.link} alt={item.title} />
					);
				})}
			</main>
		</section>
	);
}

export default Project;