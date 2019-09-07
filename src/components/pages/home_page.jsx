import styles from './home_page.module.scss';

var React = require('react');
import { ShortDescriptionSection } from "../sections/short_description_section.jsx";
import { GallerySection } from "../sections/gallery_section.jsx";
import { OurWorkProcessSection } from "../sections/work_process_section.jsx";


export class HomePage extends React.Component {
	render(props) {
		return (
			<div className={styles.home_page}>
				<ShortDescriptionSection />
				<GallerySection />
				<OurWorkProcessSection />
			</div>
			);
	}
}
;