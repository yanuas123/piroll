import styles from './indicators_section.module.scss';

var React = require('react');
import { IndicatorsItem } from "../info-components/indicators_item.jsx";


export function IndicatorsSection(props) {
	return (
		<section className={[styles.indicators_section, "section-wrap"].join(" ")}>
			<div className={["section-content_width", styles.section_inside].join(" ")}>
				<IndicatorsItem />
				<IndicatorsItem />
				<IndicatorsItem />
				<IndicatorsItem />
			</div>
		</section>
		);
}