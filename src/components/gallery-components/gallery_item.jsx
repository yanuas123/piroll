import styles from './gallery_item.module.scss';

var React = require('react');


export class GalleryItem extends React.Component {
	render(props) {
		return (
			<a href="#" className={[styles.gallery_item, styles.fit_image].join(" ")}>
				<img src="./images/images/project-1.jpg" alt="project image" />
			</a>
			);
	}
}
;