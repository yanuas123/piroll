import styles from './indicators_item.module.scss';

var React = require('react');


export function IndicatorsItem(props) {
	return (
		<div className={[styles.indicators_item, props.indicator.class_name].join(" ")}>
			<div className={styles.number}>{props.indicator.count}</div>
			<div className={styles.title}>{props.indicator.title}</div>
		</div>
		);
}