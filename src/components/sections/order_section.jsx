import styles from './order_section.module.scss';

var React = require('react');


export class OrderSection extends React.Component {
	render(props) {
		return (
			<section className={[styles.order_section, "section-wrap"].join(" ")}>
				<div className="description-section-block">
					<h3 className={styles.title}>Amelia</h3>
					<p className={styles.description}>hgfjsdgfj hbgmjh jhg jhkjg kj jgkjhkh kjh kjhhkjhk jhk gkghjkjgjkghk gjhghj gjhgjkhghjg hjgjh gjh g</p>
						<button type="button" className={[styles.order_button, "btn"].join(" ")}>Let's talk</button>
				</div>
			</section>
			);
	}
}
;