import styles from './short_contact_info.module.scss';

var React = require('react');
import { Tooltip } from "../service-components/tooltip.jsx";
import { copyToBuffer } from "../service-components/copy_to_buffer.jsx";


export class ShortContactInfo extends React.Component {
	constructor(props) {
		super(props);

		this.clickPhone.bind(this);
		this.clickEmail.bind(this);
	}
	clickPhone(e) {
		var device = window.navigator.userAgent;
		if(/Windows|Linux|Macintosh/.test(device)) {
			e.preventDefault();
			if(copyToBuffer(e.target)) Tooltip(e.target, "Copied to Buffer");
		}
	}
	clickEmail(e) {
		if(copyToBuffer(e.target)) Tooltip(e.target, "Copied to Buffer");
	}

	render() {
		return (
			<React.Fragment>
				<div className={styles.email} tabIndex={0} onClick={this.clickEmail}>{this.props.email}</div>
				<a href={this.props.phone} onClick={this.clickPhone}>{this.props.phone}</a>
			</React.Fragment>
			);
	}
}
;