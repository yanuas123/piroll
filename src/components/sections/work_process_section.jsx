import styles from './work_process_section.module.scss';

var React = require('react');


export class OurWorkProcessSection extends React.Component {
	render(props) {
		return (
			<section className={[styles.work_process_section, "section-wrap"].join(" ")}>
				<div className={["description-section-block", styles.work_process_section_inside].join(" ")}>
					<h2 className={styles.title}>UI</h2>
					<p className={styles.description}>hgfjsdgfj hbgmjh jhg jhkjg kj jgkjhkh kjh kjhhkjhk jhk gkghjkjgjkghk gjhghj gjhgjkhghjg hjgjh gjh g</p>
					<div className={styles.video_block}>
						<button type="button" className={styles.start_button}></button>
					</div>
				</div>
			</section>
			);
	}
}
;