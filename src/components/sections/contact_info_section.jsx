import styles from './contact_info_section.module.scss';

var React = require('react');
import { ErrorBoundary } from "../error-boundary.jsx";

import { ContactData } from "../info-components/contact_data.jsx";
import { ContactMessageForm } from "../info-components/contact_message_form.jsx";
import { ContactMap } from "../info-components/contact_map.jsx";


export class ContactInfoSection extends React.Component {
	render() {
		return (
			<section className={[styles.contact_info_section, "section-wrap"].join(" ")}>
				<div className={["description-section-block", styles.contact_info_section__wrap].join(" ")}>
					<div className={styles.contact_section}>
						<div className={styles.contact_data}>
							{ this.props.contact_info &&
							<ErrorBoundary>
								<ContactData contact_info={this.props.contact_info} />
							</ErrorBoundary>
							}
						</div>
						<div className={styles.contact_message_form}>
							<ErrorBoundary>
								<ContactMessageForm />
							</ErrorBoundary>
						</div>
					</div>
					<div className={styles.map_section}>
						{ this.props.contact_info &&
							<ErrorBoundary>
								<ContactMap lat={this.props.contact_info.coord_lat} lng={this.props.contact_info.coord_lng} />
							</ErrorBoundary>
						}
					</div>
				</div>
			</section>
			);
	}
}
;