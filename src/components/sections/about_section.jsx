import styles from './about_section.module.scss';

var React = require('react');


export function AboutMeSection(props) {
	return (
		<section className={[styles.about_section, "section-wrap"].join(" ")}>
			<div className={styles.section_inside}>
				<div className={styles.image_wrap}>
					<img src="./images/images/about.jpg" alt={"Characteristic photo"} />
				</div>
				<div className={styles.description_wrap}>
					<h3>About me</h3>
					<div className={styles.decription}>
						<p>Given let waters air sea had you'll, may seed abundantly fish. 
							Were, you'll earth forth winged above brought. Own darkness 
							they're him can't fourth sea place have.</p>
						<p>So the above May stars cattle fruitful face shall. Tree it, winged. 
							Every signs male firmament us. Morning him.</p>
					</div>
					<img src="./images/images/personal-sign.png" alt={"Sign of artist"} className={styles.sign_image} />
				</div>
			</div>
		</section>
		);
}