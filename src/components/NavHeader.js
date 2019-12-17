import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { MyContext } from './../StateComponents/MyProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavHeader.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

class NavHeader extends React.Component {
	static contextType = MyContext;
	render() {
		return (
			<div>
				<Navbar className="navBar" expand="lg">
					<LinkContainer to="/">
						<Navbar.Brand>
							<span
								className="NavHeader__title"
								onMouseEnter={this.onMouseEnter}
								onMouseLeave={this.onMouseLeave}
							>
								<FontAwesomeIcon icon={faTasks} /> Boilerplate Task-App
							</span>
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<LinkContainer to="/">
								<Nav.Link>
									<span className="link">Landing Page</span>
								</Nav.Link>
							</LinkContainer>
							{!this.context.state.token && (
								<LinkContainer to="/create-account">
									<Nav.Link>
										<span className="link">Create Account Page</span>
									</Nav.Link>
								</LinkContainer>
							)}
							{this.context.state.token && (
								<LinkContainer to="/task-manager">
									<Nav.Link>
										<span className="link">Task Manager App Page</span>
									</Nav.Link>
								</LinkContainer>
							)}
							{this.context.state.token && (
								<LinkContainer to="/profile">
									<Nav.Link>
										<span className="link">Profile Page</span>
									</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default NavHeader;
