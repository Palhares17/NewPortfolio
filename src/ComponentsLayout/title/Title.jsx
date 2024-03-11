import React from 'react';
import styles from './title.module.css';

function Title({ children, ...props }) {
	return (
		<h3 {...props} className={styles.title}>{children}</h3>
	);
}

export default Title;