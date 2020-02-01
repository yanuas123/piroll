import styles from './banner_description_section.module.scss';

var React = require('react');


export function BannerDescriptionSection(props) {
	var backgroundImage = {
		backgroundImage: `url(${props.banner_description.image_url})`
	};
	return (
		<section className={[styles.banner_description_section, "section-wrap"].join(" ")} style={backgroundImage}>
			<div className="description-section-block">
				<h2 className={styles.title}>{props.banner_description.title}</h2>
				<p className={styles.description}>{props.banner_description.description}</p>
			</div>
		</section>
		);
}