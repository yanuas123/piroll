import styles from './main.module.scss';
	var React = require('react');
	import { HomePage } from "./pages/home_page.jsx";
	import { AboutPage } from "./pages/about_page.jsx";
	import { ProjectGalleryPage } from "./pages/project_gallery_page.jsx";
	import { ContactPage } from "./pages/contact_page.jsx";
	export class Main extends React.Component {
	constructor(props) {
	super(props);
		this.state = {
		galleryIsLoaded: false,
			gallery: null
		};
	}
	fetchGallery() {
	fetch("./gallery").then(res => res.json())
		.then(res => {
		this.setState({
		galleryIsLoaded: true,
			gallery: res
		});
		}, err => console.log(err));
	}
	componentDidMount() {
	this.fetchGallery();
	}


	render() {
	return (
<main className={styles.main}>
    <HomePage short_description={this.props.data.short_description} work_process={this.props.data.work_process} gallery={this.state.gallery} />

	{/*<ContactPage contact_info={
	 this.props.data.contact_info} />*/}

	 {/*<AboutPage banner_description={this.props.data.banner_description} about_me={
	  this.props.data.about_me} order_description={
	  this.props.data.order_description} />*/}

</main>
		);
	}
	}
;