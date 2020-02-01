import styles from './short_description_section.module.scss';

var React = require('react');


export function ShortDescriptionSection(props) {
	return (
		<section className={[styles.short_description_section, "section-wrap"].join(" ")}>
			<div className="description-section-block">
				<h2 className={styles.title}>{props.short_description.title}</h2>
				<p className={styles.description}>{props.short_description.description}</p>
			</div>
		</section>
		);
}