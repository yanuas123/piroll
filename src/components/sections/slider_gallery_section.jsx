import styles from './slider_gallery_section.module.scss';

var React = require('react');
import { GalleryBtnBlock } from "../gallery-components/gallery_btn_block.jsx";
import { SliderGalleryItem } from "../gallery-components/slider_gallery_item.jsx";


export class SliderGallerySection extends React.Component {
	render(props) {
		return (
			<section className={styles.slider_gallery_section}>
				<SliderGalleryItem />
				<GalleryBtnBlock />
			</section>
			);
	}
}
;