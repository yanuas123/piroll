import styles from './main.module.scss';

var React = require('react');
import { HomePage } from "./pages/home_page.jsx";
import { AboutPage } from "./pages/about_page.jsx";
import { ProjectGalleryPage } from "./pages/project_gallery_page.jsx";
import { ContactPage } from "./pages/contact_page.jsx";


export class Main extends React.Component {
	render(props) {
		return (
			<main className={styles.main}>
				<HomePage />
			</main>
			);
	}
}
;