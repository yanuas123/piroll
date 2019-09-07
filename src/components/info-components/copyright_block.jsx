import styles from './copyright_block.module.scss';

var React = require('react');


export class CopyrightBlock extends React.Component {
	render(props) {
		return (
			<React.Fragment>
				<div className={styles.company_name}>Piroll</div>
				<div className={styles.copyright}>Piroll</div>
				<div className={styles.producer}>Piroll</div>
			</React.Fragment>
			);
	}
}
;