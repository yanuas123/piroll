import styles from './contact_page.module.scss';

var React = require('react');
import { ContactInfoSection } from "../sections/contact_info_section.jsx";


export class ContactPage extends React.Component {
	render(props) {
		return (
			<div className={styles.contact_page}>
				<ContactInfoSection />
			</div>
			);
	}
}
;