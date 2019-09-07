import styles from './short_contact_info.module.scss';

var React = require('react');


export class ShortContactInfo extends React.Component {
	render(props) {
		return (
			<React.Fragment>
				<div className={styles.email} tabIndex={0}>email</div>
				<a href="#">465</a>
			</React.Fragment>
			);
	}
}
;