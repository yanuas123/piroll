var React = require('react');

import { PopupContainer } from './container.jsx';

import { PopupMessageThank } from './exemples/message_thank.jsx';
import { OrderProjectForm } from './exemples/order_project.jsx';
import { PopupProjectThank } from './exemples/project_thank.jsx';


const CONTENT_PROP = [{
		name: "message_thank",
		component: <PopupMessageThank />
	}, {
		name: "order_project",
		component: <OrderProjectForm />
	}, {
		name: "project_thank",
		component: <PopupProjectThank />
	}];

export class PopupFactory extends React.Component {

	showPopup(name) {

	}

	render() {
		let popup_content = null;
		for(let i = 0; i < CONTENT_PROP.length; i++) {
			if(CONTENT_PROP[i].name == this.props.content_name) {
				popup_content = CONTENT_PROP[i].component;
				break;
			}
		}

		return (
			<PopupContainer>
			{popup_content}
			</PopupContainer>
			);
	}
}
;