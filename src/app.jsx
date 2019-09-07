var ReactDOM = require('react-dom');
var React = require('react');
import { Header }
from './components/header.jsx';
import { Main }
from './components/main.jsx';
import { Footer }
from './components/footer.jsx';


class App extends React.Component {

	constructor() {
		this.state = {
			main_menu: null
		};
	}
	fetchStart() {
		fetch("/startinfo")
			.then(res => res.json())
			.then(res => this.setState({
					main_menu: res.main_menu
				}))
			.catch(err => console.log(err));
	}

	componentDidMount() {
		this.fetchStart();
	}
	render() {
		return (
			<React.Fragment>
				<Header menu={this.state.main_menu} />
				<Main />
				<Footer />
			</React.Fragment>
			);
	}
}
;
ReactDOM.render(
	<App />,
	document.getElementById("app")
	);