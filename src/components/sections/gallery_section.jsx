import styles from './gallery_section.module.scss';

var React = require('react');
import { GalleryItem } from "../gallery-components/gallery_item.jsx";


export class GallerySection extends React.Component {
	render(props) {
		return (
			<section className={styles.gallery_section}>
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
			</section>
			);
	}
}
;