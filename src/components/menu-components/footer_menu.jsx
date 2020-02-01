import styles from './footer_menu.module.scss';

var React = require('react');


export class FooterMenu extends React.Component {
	render() {
		if(this.props.menu && this.props.menu instanceof Array) {
			return (
				<ul className={styles.footer_menu}>
					{this.props.menu.map((item, i) => <li key={i} className={styles.menu_item}>
						<a href={item.url}>{item.title}</a>
					</li>)}
				</ul>
				);
		} else return null;
	}
}
;