import styles from './gallery_btn_block.module.scss';

var React = require('react');
import { SliderIndicator } from "../secondary-components/slider_indicator.jsx";


export class GalleryBtnBlock extends React.Component {
	render(props) {
		return (
			<section className={"section-wrap"}>
				<div className={["section-content_width", styles.gallery_btn_block].join(" ")}>
					<button type="button" className={[styles.slider_btn, styles.slider_btn_prev].join(" ")} tabIndex={-1}>Previous project</button>
					<SliderIndicator />
					<button type="button" className={[styles.slider_btn, styles.slider_btn_next].join(" ")} tabIndex={-1}>Previous next</button>
				</div>
			</section>
			);
	}
}
;