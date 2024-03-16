import React from 'react';
import { Plus } from '@phosphor-icons/react';
import styles from './history.module.css';

function History() {
	return (
		<section className={styles.container}>
			<h4>Curando Ciência da Computação @ UFV</h4>
			<div className={styles.data}>
				<p>
					mar 2020 ~ presente
				</p>
				<Plus size={16}/>
			</div>
		</section>
	);
}

export default History;