import styles from './contact_data.module.scss';

var React = require('react');
import { Tooltip } from "../service-components/tooltip.jsx";
import { copyToBuffer } from "../service-components/copy_to_buffer.jsx";


export class ContactData extends React.Component {
	constructor(props) {
		super(props);

		this.clickPhone.bind(this);
		this.clickEmail.bind(this);
		this.clickFax.bind(this);
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
	clickFax(e) {
		if(copyToBuffer(e.target)) Tooltip(e.target, "Copied to Buffer");
	}

	render() {
	return (
		<React.Fragment>
			<h3>Contact Info</h3>
			<div className={styles.description} dangerouslySetInnerHTML={{
							__html: this.props.contact_info.description}}></div>
			<div className={styles.feature}><span className={styles.property}>Address: </span>{this.props.contact_info.address}</div>
			<div className={styles.feature}><span className={styles.property}>Phone: </span><a href={this.props.contact_info.phone} tabIndex={-1} onClick={this.clickPhone}>{this.props.contact_info.phone}</a></div>
			<div className={styles.feature}><span className={styles.property}>Email: </span><span className={styles.data_for_copy} onClick={this.clickEmail}>{this.props.contact_info.email}</span></div>
			<div className={styles.feature}><span className={styles.property}>Fax: </span><span className={styles.data_for_copy} onClick={this.clickFax}>{this.props.contact_info.fax}</span></div>
		</React.Fragment>
			);
	}
}
;