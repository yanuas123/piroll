import styles from './about_page.module.scss';

var React = require('react');
import { ErrorBoundary } from "../error-boundary.jsx";

import { BannerDescriptionSection } from "../sections/banner_description_section.jsx";
import { IndicatorsSection } from "../sections/indicators_section.jsx";
import { AboutMeSection } from "../sections/about_section.jsx";
import { OrderSection } from "../sections/order_section.jsx";


export class AboutPage extends React.Component {
	render() {
		return (
			<div className={styles.about_page}>
			
				{ this.props.banner_description &&
							<BannerDescriptionSection banner_description={this.props.banner_description} />
				}
			
				<ErrorBoundary>
					<IndicatorsSection />
				</ErrorBoundary>
			
				{ this.props.about_me &&
							<AboutMeSection about_me={this.props.about_me} />
				}
			
				{ this.props.order_description &&
							<ErrorBoundary>
								<OrderSection order_description={this.props.order_description} />
							</ErrorBoundary>
				}
			
			</div>
			);
	}
}
;