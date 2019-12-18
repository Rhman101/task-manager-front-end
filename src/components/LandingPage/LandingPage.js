import React from 'react';
import Logout from '../Logout';
import Login from './Login';
import { MyContext } from './../../StateComponents/MyProvider';
import improvements from './../../constants/improvements';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.scss';
import { Container } from 'react-bootstrap';

class LandingPage extends React.Component {
	static contextType = MyContext;
	render() {
		return (
			<div className="LandingPage_main">
				<Container className='LandingPage_mainContainer'>
					<h1>_MERN Stack Boilerplate Project using a RESTful API: A Full-Stack Learning Project</h1>
					{!this.context.state.token ? (
						<Login history={this.props.history} />
					) : (
						<p>You are logged in. Click on the Task Manager App link to use the app.</p>
					)}
					<Logout history={this.props.history} />
					<p className='LandingPage__listHeading'>A list of possible improvements:</p>
					<ol className='LandingPage__list'>
						{improvements.map((elem, id) => (
							<li className='LandingPage__listItems' key={id}>{elem}</li>
						))}
					</ol>
				</Container>
			</div>
		);
	}
}

export default LandingPage;
