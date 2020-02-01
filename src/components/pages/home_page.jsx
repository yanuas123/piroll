import styles from './home_page.module.scss';

var React = require('react');
import { ErrorBoundary } from "../error-boundary.jsx";

import { ShortDescriptionSection } from "../sections/short_description_section.jsx";
import { GallerySection } from "../sections/gallery_section.jsx";
import { OurWorkProcessSection } from "../sections/work_process_section.jsx";


export class HomePage extends React.Component {
	render() {
		return (
			<div className={styles.home_page}>
				{ this.props.short_description &&
							<ShortDescriptionSection short_description={this.props.short_description} />
				}
			
				{ this.props.gallery && this.props.gallery instanceof Array &&
							<ErrorBoundary>
								<GallerySection gallery={this.props.gallery} />
							</ErrorBoundary>
				}
			
				{ this.props.work_process &&
							<ErrorBoundary>
								<OurWorkProcessSection work_process={this.props.work_process} />
							</ErrorBoundary>
				}
			
			</div>
			);
	}
}
;