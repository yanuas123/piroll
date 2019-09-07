import styles from './footer_menu.module.scss';

var React = require('react');


export class FooterMenu extends React.Component {
	render(props) {
		return (
			<ul className={styles.footer_menu}>
				<li className={styles.menu_item}>
					<a href="#">Project</a>
				</li>
				<li className={styles.menu_item}>
					<a href="#">Project</a>
				</li>
				<li className={styles.menu_item}>
					<a href="#">Project</a>
				</li>
				<li className={styles.menu_item}>
					<a href="#">Project</a>
				</li>
				<li className={styles.menu_item}>
					<a href="#">Project</a>
				</li>
				<li className={styles.menu_item}>
					<a href="#">Project</a>
				</li>
				<li className={styles.menu_item}>
					<a href="#">Project</a>
				</li>
				<li className={styles.menu_item}>
					<a href="#">Project</a>
				</li>
			</ul>
			);
	}
}
;