var ReactDOM = require('react-dom');
var React = require('react');
import { Header }
from './components/header.jsx';
import { Main }
from './components/main.jsx';
import { Footer }
from './components/footer.jsx';
//import { PopupFactory }
//from './service-components/pop_up/factory.jsx';


class App extends React.Component {

	constructor(props) {
		super(props);

		this.popupRef = React.createRef();

		this.state = {
			startIsLoaded: false,
			main_menu: null,
			footer_menu: null,
			logo_url: null,
			contact_info: null,
			social_networks: null,
			about_me: null,
			work_process: null,
			short_description: null,
			banner_description: null,
			order_description: null
		};
	}
	fetchStart() { // start data downloading
		fetch("/startinfo")
			.then(res => res.json())
			.then(res => {
				this.setState({
					startIsLoaded: true,
					main_menu: res.main_menu,
					footer_menu: res.footer_menu
				});
				if(res.contact_info) {
					let info = res.contact_info;
					this.setState({
						logo_url: info.logo_url,
						contact_info: info.contact_info,
						about_me: info.about_me,
						work_process: info.work_process,
						short_description: info.short_description,
						banner_description: info.banner_description,
						order_description: info.order_description
					});
				}
			},
				err => console.log(err));
	}
	showPopup(name) {
		this.popupRef.current.showPopup(name);
	}


	componentDidMount() {
		this.fetchStart();
	}
	render() {
		return (
			<React.Fragment>
				<Header menu={this.state.main_menu} logo={this.state.logo_url} />
				<Main data={this.state} />
				<Footer menu={this.state.footer_menu} contact_info={this.state.contact_info} />
				{/*<PopupFactory ref={this.popupRef} />*/}
			</React.Fragment>
			);
	}
}
;
ReactDOM.render(
	<App />,
	document.getElementById("app")
	);