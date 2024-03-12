import { Code } from '@phosphor-icons/react';
import React from 'react';
import styles from './skills.module.css';
import Title from '../ComponentsLayout/title/Title';
import Text from '../ComponentsLayout/text/Text';
import Abilidies from './abilities/Abilities';

import html from '../assets/svg/html.svg';
import css from '../assets/svg/css.svg';
import javascript from '../assets/svg/javascript.svg';
import react from '../assets/svg/react.svg';
import tailwindCss from '../assets/svg/tailwind-css.svg';
import typescript from '../assets/svg/typescript.svg';
import figma from '../assets/svg/figma.svg';
import git from '../assets/svg/git.svg';
import github from '../assets/svg/github.svg';

function Skills() {
	return (
		<section>
			<div className={styles.container}>
				<Title>
					<Code className={styles.bgIcon} /> Minhas Principais habilidades
				</Title>
				<Text>
          Tenho 2 anos de experiencias com desenvolvimento web, e hoje estou me
          aprimorando para dispositivos móveis.
				</Text>
			</div>

			<section className={styles.grid}>
				<Abilidies
					title="Sistema Web"
					text="E os debitis maxime sed adipisci voluptatibus ut dolorum veritatis vel nesciunt voluptatem."
					icon="web"
				/>
				<Abilidies
					title="Designs Reponsivos"
					text="E os debitis maxime sed adipisci voluptatibus ut dolorum veritatis vel nesciunt voluptatem."
					icon="mobile"
				/>
				<Abilidies
					title="UI/UX Design"
					text="E os debitis maxime sed adipisci voluptatibus ut dolorum veritatis vel nesciunt voluptatem."
					icon="design"
				/>
			</section>

			<section className={styles.content}>
				<div className={styles.gridTechs}>
					<div className={styles.techs}>
						<img src={html} alt="" className={styles.img} />
						<span className={styles.name}>html</span>
					</div>
					<div className={styles.techs}>
						<img src={css} alt="" className={styles.img} />
						<span className={styles.name}>css</span>
					</div>

					<div className={styles.techs}>
						<img src={javascript} alt="" className={styles.img} />
						<span className={styles.name}>javascript</span>
					</div>

					<div className={styles.techs}>
						<img src={react} alt="" className={styles.img} />
						<span className={styles.name}>react</span>
					</div>

					<div className={styles.techs}>
						<img src={tailwindCss} alt="" className={styles.img} />
						<span className={styles.name}>tailwindCss</span>
					</div>

					<div className={styles.techs}>
						<img src={typescript} alt="" className={styles.img} />
						<span className={styles.name}>typescript</span>
					</div>

					<div className={styles.techs}>
						<img src={figma} alt="" className={styles.img} />
						<span className={styles.name}>figma</span>
					</div>

					<div className={styles.techs}>
						<img src={git} alt="" className={styles.img} />
						<span className={styles.name}>git</span>
					</div>

					<div className={styles.techs}>
						<img src={github} alt="" className={styles.img} />
						<span className={styles.name}>github</span>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Skills;
