import styles from './header.module.scss';

var React = require('react');
import { ErrorBoundary } from "./error-boundary.jsx";
import { MainMenu } from "./menu-components/main_menu.jsx";


export class Header extends React.Component {
	render() {
		return (
			<header className={["section-wrap", styles.header].join(" ")}>
				<div className={["section-content_width", styles.inside_container].join(" ")}>
					<img src={this.props.logo} alt={"logo"} className={["logo", styles.logo].join(" ")} />
					<ErrorBoundary>
						<MainMenu menu={this.props.menu} />
					</ErrorBoundary>
				</div>
			</header>
			);
	}
}
;