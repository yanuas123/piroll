import styles from './short_description_section.module.scss';

var React = require('react');


export function ShortDescriptionSection(props) {
	return (
		<section className={[styles.short_description_section, "section-wrap"].join(" ")}>
			<div className="description-section-block">
				<h2 className={styles.title}>UI</h2>
				<p className={styles.description}>hgfjsdgfj hbgmjh jhg jhkjg kj jgkjhkh kjh kjhhkjhk jhk gkghjkjgjkghk gjhghj gjhgjkhghjg hjgjh gjh g</p>
			</div>
		</section>
		);
}