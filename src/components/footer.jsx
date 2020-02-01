import styles from './footer.module.scss';

var React = require('react');
import { ErrorBoundary } from "./error-boundary.jsx";

import { CopyrightBlock } from "./info-components/copyright_block.jsx";
import { ShortContactInfo } from "./info-components/short_contact_info.jsx";
import { FooterMenu } from "./menu-components/footer_menu.jsx";
import { SocialNetworks } from "./info-components/social_networks.jsx";


export class Footer extends React.Component {
	render() {
		return (
			<footer className={["section-wrap", styles.footer].join(" ")}>
				<div className={["section-content_width", styles.inside_footer].join(" ")}>

					<div className={styles.copyright_block}>
						{ this.props.contact_info &&
							<CopyrightBlock company_name={this.props.contact_info.company_name} copyright={this.props.contact_info.copyright} />
						}
					</div>

					<div className={styles.short_contact_info}>
						{ this.props.contact_info &&
						<ErrorBoundary>
							<ShortContactInfo email={this.props.contact_info.email} phone={this.props.contact_info.phone} />
						</ErrorBoundary>
						}
					</div>

					<div className={styles.footer_menu}>
						<ErrorBoundary>
							<FooterMenu menu={this.props.menu} />
						</ErrorBoundary>
					</div>

					<div className={styles.social_networks}>
						<div className={styles.social_networks__inside}>
							<ErrorBoundary>
								<SocialNetworks />
							</ErrorBoundary>
						</div>
					</div>

				</div>
			</footer>
			);
	}
}
;