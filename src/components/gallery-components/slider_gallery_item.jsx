import styles from './slider_gallery_item.module.scss';

var React = require('react');


export class SliderGalleryItem extends React.Component {
	render(props) {
		return (
			<section className={[styles.slider_gallery_item, "section-wrap"].join(" ")}>
				<div className={styles.slider_gallery_item_inside}>
					<div className={styles.description_block}>
						<div className={styles.description_block_inside}>
							<h2>Light</h2>
							<div className={styles.description_container}>
								<p>Given let waters air sea had you'll, may seed abundantly fish. Were, you'll earth forth winged above brought. Own darkness they're him can't fourth sea place have. inged above brought. Own darkness they're him can't fourth sea place ha</p>
								<p>So the above May stars cattle fruitful face shall. Tree it, winged. 
									Every signs male firmament us. Morning him.</p>
							</div>
							<div className={styles.feature}><span className={styles.property}>Address: </span><a href="#" tabIndex={-1}>jfgdhgfsgd dhg</a></div>
							<div className={styles.feature}><span className={styles.property}>Address: </span>jfgdhgfsgd dhg</div>
							<div className={styles.feature}><span className={styles.property}>Address: </span>jfgdhgfsgd dhg</div>
						</div>
					</div>
					<div className={styles.image_block}>
						<img src="./images/images/project_single.jpg" alt={"project image"} />
					</div>
				</div>
			</section>
			);
	}
}
;