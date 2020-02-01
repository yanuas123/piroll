import styles from './main_menu.module.scss';

var React = require('react');


export class MainMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active_item: "Home"
		};
	}

	render() {
		if(this.props.menu && this.props.menu instanceof Array) {
			return (
				<ul className={styles.main_menu}>
					{this.props.menu.map((item, i) => {
								var active = false;
								if(item.title == this.state.active_item) active = true;
								return (<li key={i + 1} className={[styles.list_item, active ? styles.active : ""].join(" ")}>
									<a href={item.url} tabIndex={i + 1}>{item.title}</a>
								</li>);
								})}
				</ul>
						);
			} else return null;
		}
	}
	;