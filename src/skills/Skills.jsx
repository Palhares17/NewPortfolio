import { Code } from '@phosphor-icons/react';
import React from 'react';	
import styles from './skills.module.css';
import Title from '../ComponentsLayout/title/Title';
import Text from '../ComponentsLayout/text/Text';
import Abilidies from './abilities/Abilities';

function Skills() {
	return (
		<section>
			<div className={styles.container}>
				<Title><Code className={styles.bgIcon} /> Minhas Principais habilidades</Title>		
				<Text>Tenho 2 anos de experiencias com desenvolvimento web, e hoje estou me aprimorando para dispositivos móveis.</Text>
			</div>

			<section className={styles.grid}>
				<Abilidies 
					title='Sistema Web' 
					text='E os debitis maxime sed adipisci voluptatibus ut dolorum veritatis vel nesciunt voluptatem.' 
					icon='web'
				/>
				<Abilidies 
					title='Designs Reponsivos' 
					text='E os debitis maxime sed adipisci voluptatibus ut dolorum veritatis vel nesciunt voluptatem.' 
					icon='mobile'
				/>
				<Abilidies 
					title='UI/UX Design' 
					text='E os debitis maxime sed adipisci voluptatibus ut dolorum veritatis vel nesciunt voluptatem.' 
					icon='design'
				/>
			</section>
		</section>
	);
}

export default Skills;