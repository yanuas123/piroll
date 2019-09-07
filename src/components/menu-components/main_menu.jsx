import styles from './main_menu.module.scss';

var React = require('react');


export class MainMenu extends React.Component {
	render(props) {
		if(props.menu) {
		return (
				<ul className={styles.main_menu}>
			{props.menu.map((item, i) =>
										<li key={i + 1} className={styles.list_item}>
													<a href={item.url} tabIndex={i + 1}>{item.title}</a>
												</li>)}
				<li key={"1"} className={[styles.list_item, styles.active].join(" ")}>
					<a href="#" tabIndex={1}>Home</a>
				</li>
				<li key={"2"} className={styles.list_item}>
					<a href="#" tabIndex={2}>About</a>
				</li>
				<li key={"3"} className={styles.list_item}>
					<a href="#" tabIndex={3}>Content</a>
				</li>
			</ul>
				);
		} else return null;
	}
}
;