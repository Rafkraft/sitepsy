import React from 'react';
import styles from 'styles/styles.css';
import Menu from '../Menu';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { Layout, NavDrawer, Panel } from 'react-toolbox/lib/layout';
import Navigation from 'react-toolbox/lib/navigation';
import FontIcon from 'react-toolbox/lib/font_icon';
import Button from 'react-toolbox/lib/button';
import Link from 'react-toolbox/lib/link';

//import { Layout, NavDrawer, Panel, Sidebar, Navigation, FontIcon, Button, Link } from 'react-toolbox';

import s from './styles.css';
import theme from './theme.scss';

export default class RootLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drawerActive: false
		};
	}

	toggleDrawerActive() {
		this.setState({ drawerActive: !this.state.drawerActive });
	}

	render() {
	    return (
	    	<Layout>
	    		<NavDrawer 
	    			active={this.state.drawerActive}
	    			onOverlayClick={ this.toggleDrawerActive.bind(this) }
	    			theme={theme}>
					<Navigation type="vertical">
						<Link label="Accueil" href="/" icon="home" />
						<Link label="Qui suis je ?" href="/quisuisje" icon="person_pin" />
						<Link label="Consultations" href="/consultations" icon="mode_edit" />
						<Link label="Approches" href="/approches" icon="search" />
						<Link label="Articles" href="/articles" icon="library_books" />
						<Link label="Contact" href="/contact" icon="contact_phone" />
					</Navigation>
	    		</NavDrawer>
	    		<Panel>
					<Helmet 
						title="A. Barthélémy Psychologue Psychothérapeute Toulouse enfant ado parent"
						link={[
							{"rel": "stylesheet", "type": "text/css", "href": "/styles.css"},
							{"rel": "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
						]}
						meta={[
							{"name": "description", "content": "Audrey Barthélémy Psychologue Enfant Adolescent Parent Décrochage scolaire Agressivité Haut potentiel Autisme Enurésie Socialisation Toulouse La Salvetat Saint Gilles"},
							{"name": "viewport", "content": "width=device-width, user-scalable=no"}
					 	]} />
					<Menu toggleDrawerActive={this.toggleDrawerActive.bind(this)} />
					{this.props.children}
	    		</Panel>
	    	</Layout>
		);
	}
}
