import styles from './contact_info_section.module.scss';

var React = require('react');
import { ContactData } from "../info-components/contact_data.jsx";
import { ContactMessageForm } from "../info-components/contact_message_form.jsx";
import { ContactMap } from "../info-components/contact_map.jsx";


export class ContactInfoSection extends React.Component {
	render(props) {
		return (
			<section className={[styles.contact_info_section, "section-wrap"].join(" ")}>
				<div className={["description-section-block", styles.contact_info_section__wrap].join(" ")}>
					<div className={styles.contact_section}>
						<div className={styles.contact_data}>
							<ContactData />
						</div>
						<div className={styles.contact_message_form}>
							<ContactMessageForm />
						</div>
					</div>
					<div className={styles.map_section}>
						<ContactMap />
					</div>
				</div>
			</section>
			);
	}
}
;