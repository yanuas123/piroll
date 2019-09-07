import styles from './header.module.scss';

var React = require('react');
import { MainMenu } from "./menu-components/main_menu.jsx";


export class Header extends React.Component {
	render(props) {
		return (
			<header className={["section-wrap", styles.header].join(" ")}>
				<div className={["section-content_width", styles.inside_container].join(" ")}>
					<img src="images/images/logo.png" alt={"logo"} className={["logo", styles.logo].join(" ")} />
					<MainMenu menu={props.menu} />
				</div>
			</header>
			);
	}
}
;