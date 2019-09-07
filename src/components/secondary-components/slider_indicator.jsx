import styles from './slider_indicator.module.scss';

var React = require('react');


export class SliderIndicator extends React.Component {
	render(props) {
		return (
			<div className={styles.slider_indicator}>
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" className={styles.slider_indicator_svg}>
					<rect x="2" y="2" fill="" width="6" height="6" className={styles.black_rect} />
					<rect x="12" y="2" width="6" height="6" className={styles.black_rect} />
					<rect x="12" y="12" width="6" height="6" className={styles.black_rect} />
					<rect x="2" y="12" width="6" height="6" className={styles.black_rect} />
					<rect x="2" y="2" width="6" height="6" className={styles.green_rect} />
					<rect x="12" y="2" width="6" height="6" className={[styles.green_rect, styles.active].join(" ")} />
					<rect x="12" y="12" width="6" height="6" className={styles.green_rect} />
					<rect x="2" y="12" width="6" height="6" className={styles.green_rect} />
				</svg>
			</div>
			);
	}
}
;