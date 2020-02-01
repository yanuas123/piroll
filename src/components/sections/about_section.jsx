import styles from './about_section.module.scss';

var React = require('react');


export function AboutMeSection(props) {
	return (
		<section className={[styles.about_section, "section-wrap"].join(" ")}>
			<div className={styles.section_inside}>
				<div className={styles.image_wrap}>
					<img src={props.about_me.image_url} alt={"Characteristic photo"} />
				</div>
				<div className={styles.description_wrap}>
					<h3>About me</h3>
					<div className={styles.decription} dangerouslySetInnerHTML={{
					__html: props.about_me.description}}></div>
					<img src={props.about_me.sign_image_url} alt={"Sign of artist"} className={styles.sign_image} />
				</div>
			</div>
		</section>
		);
}