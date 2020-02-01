import styles from './container.module.scss';

var React = require('react');


const POPUP_DEF_PROP = {
	body_class: "noscroll",
	container_class: "display-popup",
	container_animate_class: "animate-popup",
	popup_class: "display-popup",
	container_id: "popups",
	wrap_selector: ".popups-frame_wrap"
};

export class PopupContainer extends React.Component {

	
	constructor(props) {
		super(props);
		
		this.body_El = document.body;
	}

	open(title, callback) {
		if(this._active_title) this.close(this._active_title);
		this.container.classList.add(this.prop.container_class);
		this.body_El.classList.add(this.prop.body_class);
		let target = this.targ_El[title];
		target.classList.add(this.prop.popup_class);
		this._active_title = title;
		if(callback) this._active_callback = callback;
	}
	close(title) {

	}

	render() {
		return (
			<div className={["popup-wrap", "animate-popup"].join(" ")}>
				<div className="back-wall" data-popup-close></div>
				<div className="popups-block_wrap">
					<div className="popups-frame_wrap">
						<div className="popups-frame">
							<div className="close-button-row">
								<button className="btn-icon icon-color-custom ico_close close-btn" type="button" data-popup-close></button>
							</div>
							<div className="popups-window">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
			);
	}
}
;