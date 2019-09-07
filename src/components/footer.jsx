import styles from './footer.module.scss';

var React = require('react');
import { CopyrightBlock } from "./info-components/copyright_block.jsx";
import { ShortContactInfo } from "./info-components/short_contact_info.jsx";
import { FooterMenu } from "./menu-components/footer_menu.jsx";
import { SocialNetworks } from "./info-components/social_networks.jsx";


export class Footer extends React.Component {
	render(props) {
		return (
			<footer className={["section-wrap", styles.footer].join(" ")}>
				<div className={["section-content_width", styles.inside_footer].join(" ")}>
					<div className={styles.copyright_block}>
						<CopyrightBlock />
					</div>
					<div className={styles.short_contact_info}>
						<ShortContactInfo />
					</div>
					<div className={styles.footer_menu}>
						<FooterMenu />
					</div>
					<div className={styles.social_networks}>
						<div className={styles.social_networks__inside}>
							<SocialNetworks />
						</div>
					</div>
				</div>
			</footer>
			);
	}
}
;