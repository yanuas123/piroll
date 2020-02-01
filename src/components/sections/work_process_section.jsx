import styles from './work_process_section.module.scss';

var React = require('react');


export class OurWorkProcessSection extends React.Component {
	render() {
		return (
			<section className={[styles.work_process_section, "section-wrap"].join(" ")}>
				<div className={["description-section-block", styles.work_process_section_inside].join(" ")}>
					<h2 className={styles.title}>Our Work Process</h2>
					<p className={styles.description}>{this.props.work_process.description}</p>
					<div className={styles.video_block}>
						<button type="button" className={styles.start_button}></button>
					</div>
				</div>
			</section>
			);
	}
}
;