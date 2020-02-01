import styles from './gallery_item.module.scss';

var React = require('react');


export class GalleryItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			imageLoaded: false
		};
	}
	setImageLoaded() {
		var time = Math.floor(Math.random() * 2000);
		setTimeout(() =>
			this.setState({
				imageLoaded: true
			}), time);
	}

	render() {
		return (
			<a href={this.props.item.url} className={[styles.gallery_item, styles[this.props.color]].join(" ")}>
				<div className={[styles.animation_block, this.state.imageLoaded ? styles.open : "", this.props.item.thumbnail_image_fit_ratio ? styles.fit_image : ""].join(" ")}>
					<img src={this.props.item.thumbnail_image_url} alt={this.props.item.alt} onLoad={this.setImageLoaded.bind(this)} />
				</div>
			</a>
			);
	}
}
;