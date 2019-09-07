import styles from './contact_message_form.module.scss';

var React = require('react');


export class ContactMessageForm extends React.Component {
	render(props) {
		return (
			<form name="message_form" method="post" action="message">
				<input type="text" name="name" placeholder="Your" required tabIndex={200} className={["input", "input__couple", "input__couple__first"].join(" ")} />
				<input type="email" name="email" placeholder="Your" required tabIndex={201} className={["input", "input__couple"].join(" ")} />
				<input type="text" name="title" placeholder="Your" required tabIndex={202} autoComplete="off" className={"input"} />
				<textarea name="message" placeholder="Your" required tabIndex={203} className={"textarea"}></textarea>
				<input type="submit" value="Send message" tabIndex={204} className={"btn"} />
			</form>
			);
	}
}
;