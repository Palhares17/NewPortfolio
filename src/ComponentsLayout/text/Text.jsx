import React from 'react';
import styles from './text.module.css';

function Text({ children, ...props }) {
	return (
		<p {...props} className={styles.text}>{children}</p>
	);
}

export default Text;
