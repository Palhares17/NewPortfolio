import React, { useEffect, useState } from 'react';
import { Plus } from '@phosphor-icons/react';
import styles from './history.module.css';
import { historyObj } from './history';

function History() {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			const widthWindow = window.innerWidth;
			setWidth(widthWindow);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleMobile = () => {
		return width < 768;
	};

	return (
		<div>
			{historyObj.map(item => (
				<section className={styles.container} key={item.title}>
					<h4>{handleMobile() ? item.mobileTitle : item.title}</h4>
					<div className={styles.data}>
						<p>{handleMobile() ? item.mobileDate : item.date}</p>
						<Plus size={16} />
					</div>
				</section>
			))}
		</div>
	);
}

export default History;
