import styles from './order_section.module.scss';

var React = require('react');


export class OrderSection extends React.Component {
	render() {
		return (
			<section className={[styles.order_section, "section-wrap"].join(" ")}>
				<div className="description-section-block">
					<h3 className={styles.title}>Need a Project?</h3>
					<p className={styles.description}>{this.props.order_description}</p>
					<button type="button" className={[styles.order_button, "btn"].join(" ")}>Let's talk</button>
				</div>
			</section>
			);
	}
}
;