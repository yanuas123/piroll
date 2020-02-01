import styles from './indicators_section.module.scss';

var React = require('react');
import { IndicatorsItem } from "../info-components/indicators_item.jsx";


export class IndicatorsSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			indicatorsIsLoaded: false,
			indicators: null
		};
	}
	fetchIndicators() { // download indicators
		fetch("./indicators").then(res => res.json())
			.then(res => {
				if(res instanceof Array) {
					this.setState({
						indicators: res
					});
				} else console.err("Indicators from server are not an Array!");
				this.setState({
					indicatorsIsLoaded: true
				});
			}, err => console.log(err));
	}

	componentDidMount() {
		this.fetchIndicators();
	}
	render() {
		return (
			<section className={[styles.indicators_section, "section-wrap"].join(" ")}>
				<div className={["section-content_width", styles.section_inside].join(" ")}>
					{ this.state.indicators instanceof Array &&
					this.state.indicators.map((indicator, i) => <IndicatorsItem key={i} indicator={indicator} />)
					}
				</div>
			</section>
			);
	}
}
;