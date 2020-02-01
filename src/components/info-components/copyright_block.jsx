import styles from './copyright_block.module.scss';

var React = require('react');


export function CopyrightBlock(props) {
	return (
		<React.Fragment>
			<div className={styles.company_name}>{props.company_name}</div>
			<div className={styles.copyright}><span className={styles.copy_symbol}>&copy;</span> {props.copyright}</div>
			<div className={styles.producer}>Designed by robirurk.</div>
		</React.Fragment>
		);
}
;