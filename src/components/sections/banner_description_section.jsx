import styles from './banner_description_section.module.scss';

var React = require('react');


export function BannerDescriptionSection(props) {
	return (
		<section className={[styles.banner_description_section, "section-wrap"].join(" ")}>
			<div className="description-section-block">
				<h2 className={styles.title}>Amelia</h2>
				<p className={styles.description}>hgfjsdgfj hbgmjh jhg jhkjg kj jgkjhkh kjh kjhhkjhk jhk gkghjkjgjkghk gjhghj gjhgjkhghjg hjgjh gjh g</p>
			</div>
		</section>
		);
}