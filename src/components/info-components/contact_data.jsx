import styles from './contact_data.module.scss';

var React = require('react');


export function ContactData(props) {
	return (
		<React.Fragment>
			<h3>Contact info</h3>
			<div className={styles.description}>
				<p>Given let waters air sea had you'll, may seed abundantly fish. 
					Were, you'll earth forth winged above brought. Own darkness 
					they're him can't fourth sea place have.</p>
			</div>
			<div className={styles.feature}><span className={styles.property}>Address: </span><a href="#" tabIndex={-1}>jfgdhgfsgd dhg</a></div>
			<div className={styles.feature}><span className={styles.property}>Address: </span>jfgdhgfsgd dhg</div>
		</React.Fragment>
		);
}