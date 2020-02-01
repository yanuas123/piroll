import styles from './gallery_section.module.scss';

var React = require('react');
import { ErrorBoundary } from "../error-boundary.jsx";

import { GalleryItem } from "../gallery-components/gallery_item.jsx";


export class GallerySection extends React.Component {
	constructor(props) {
		super(props);

		this.items_per_row = 4;
	}
	createItemsList() {
		var item__bg_color = "dark";

		return this.props.gallery.map((item, i) => {
			if(i % this.items_per_row) item__bg_color = item__bg_color == "dark" ? "light" : "dark";

			return (<ErrorBoundary key={i}>
							<GalleryItem item={item} color={item__bg_color} />
						</ErrorBoundary>);
		});
	}

	render() {
		return (
			<section className={styles.gallery_section}>
				{this.createItemsList()}
			</section>
			);
	}
}
;