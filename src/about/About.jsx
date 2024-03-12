import React from 'react';
import { Briefcase } from '@phosphor-icons/react';
import Title from '../ComponentsLayout/title/Title';
import styles from './about.module.css';
import Text from '../ComponentsLayout/text/Text';

function About() {
	return (
		<section>
			<div>
				<Title><Briefcase className={styles.bgIcon} /> Alguns dos meus Projetos</Title>
				<Text>
					Nasci em São Paulo, mas praticamente cresci em Rio das Ostras - RJ 🏖️. Atualmente, sou estudante na Universidade Federal de Viçosa (UFV). Sou bastante curioso, gosto muito de aprender , abrangendo desde música até física. 
					<br></br>
					<br></br>
					Iniciei minha jornada na programação aos 16 anos, explorando Python por diversão, e foi durante a faculdade que meu interesse pelo Front-end se intensificou, graças a uma incrível oportunidade na SetApp, uma empresa júnior da UFV. Meu objetivo como desenvolvedor agora é consolidar meu conhecimento em HTML, CSS e JS. Em seguida, pretendo mergulhar no universo do React.js. Posteriormente, planejo explorar o Node.js e me aprofundar em ferramentas de criação de aplicativos, como o React Native.
				</Text>
			</div>
			<div>
				
			</div>
		</section>
	);
}

export default About;