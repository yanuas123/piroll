import styles from './contact_message_form.module.scss';

var React = require('react');


export class ContactMessageForm extends React.Component {

	constructor(props) {
		super(props);

		this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		
	}


	render() {
		return (
			<form name="message_form" method="post" action="message">
				<input type="text" name="name" placeholder="Your Name" required tabIndex={200} className={["input", "input__couple", "input__couple__first"].join(" ")} />
				<input type="email" name="email" placeholder="Your Email" required tabIndex={201} className={["input", "input__couple"].join(" ")} />
				<input type="text" name="title" placeholder="Your Title" required tabIndex={202} autoComplete="off" className={"input"} />
				<textarea name="message" placeholder="Your Comment" required tabIndex={203} className={"textarea"}></textarea>
				<input type="submit" value="Send message" tabIndex={204} className={"btn"} />
			</form>
			);
	}
}
;