import styles from './indicators_item.module.scss';

var React = require('react');


export function IndicatorsItem(props) {
	return (
		<div className={[styles.indicators_item, styles.star_icon].join(" ")}>
			<div className={styles.number}>458</div>
			<div className={styles.title}>projects completed</div>
		</div>
		);
}