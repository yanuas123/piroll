import styles from './project_gallery_page.module.scss';

var React = require('react');
import { SliderGallerySection } from "../sections/slider_gallery_section.jsx";


export class ProjectGalleryPage extends React.Component {
	render(props) {
		return (
			<div className={styles.project_gallery_page}>
				<SliderGallerySection />
			</div>
			);
	}
}
;