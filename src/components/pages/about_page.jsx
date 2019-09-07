import styles from './about_page.module.scss';

var React = require('react');
import { BannerDescriptionSection } from "../sections/banner_description_section.jsx";
import { IndicatorsSection } from "../sections/indicators_section.jsx";
import { AboutMeSection } from "../sections/about_section.jsx";
import { OrderSection } from "../sections/order_section.jsx";


export class AboutPage extends React.Component {
	render(props) {
		return (
			<div className={styles.about_page}>
				<BannerDescriptionSection />
				<IndicatorsSection />
				<AboutMeSection />
				<OrderSection />
			</div>
			);
	}
}
;