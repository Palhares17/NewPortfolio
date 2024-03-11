import React from 'react';
import { Desktop, DeviceMobileCamera, CirclesThreePlus } from '@phosphor-icons/react';
import styles from './abilities.module.css';
import Text from '../../ComponentsLayout/text/Text';

function Abilidies({title, text, icon}) {
	return (
		<section className={styles.card}>
			{(icon === 'web') && <Desktop size={32}  className={styles.bgIcon} />}
			{(icon === 'mobile') && <DeviceMobileCamera size={32}  className={styles.bgIcon} />}
			{(icon === 'design') && <CirclesThreePlus size={32}  className={styles.bgIcon} />}
			<h4>{title}</h4>
			<Text>{text}</Text>
		</section>
	);
}

export default Abilidies;