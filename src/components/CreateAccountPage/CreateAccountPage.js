import React from 'react';
import './../../App.scss';
import { apiCreateAccountRequest } from './../../constants/apiUserRequests';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateAccountPage.scss';

import DataField from './DataField';
import { MyContext } from '../../StateComponents/MyProvider';
import Logout from '../Logout';

import { Button, Container, Col, Form, Row } from 'react-bootstrap';

class CreateAccountPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nameAndSurname: '',
			age: 0,
			email: '',
			password: '',
			retypePassword: '',
			passwordsMatch: true,
			errorText: {}
		};
	}

	editNameAndSurname = (event) => {
		event.persist();
		event.preventDefault();
		this.setState(() => ({
			nameAndSurname: event.target.value
		}));
	};

	editAge = (event) => {
		event.persist();
		event.preventDefault();
		this.setState(() => ({
			age: event.target.value
		}));
	};

	editPassword = (event) => {
		event.persist();
		event.preventDefault();
		this.setState(() => ({
			password: event.target.value
		}));
		if (this.state.retypePassword !== '') {
			if (this.state.retypePassword === event.target.value) {
				this.setState(() => ({
					password: event.target.value,
					passwordsMatch: true
				}));
			} else {
				this.setState(() => ({
					password: event.target.value,
					passwordsMatch: false
				}));
			}
		}
	};

	editEmail = (event) => {
		event.persist();
		event.preventDefault();
		this.setState(() => ({
			email: event.target.value
		}));
	};

	editRetypePassword = (event) => {
		event.persist();
		event.preventDefault();
		if (this.state.password === event.target.value) {
			this.setState(() => ({
				retypePassword: event.target.value,
				passwordsMatch: true
			}));
		} else {
			this.setState(() => ({
				retypePassword: event.target.value,
				passwordsMatch: false
			}));
		}
	};

	submitForm = async (context) => {
		await apiCreateAccountRequest(
			this.state.nameAndSurname,
			this.state.age,
			this.state.email,
			this.state.password,
			(error, response) => {
				if (error) {
					console.log('error', error);
				} else if (response.body.errors) {
					let errorObject = {};
					Object.keys(response.body.errors).forEach((elem) => {
						errorObject[elem] = response.body.errors[elem].message;
					});
					this.setState(() => ({
						errorText: errorObject
					}));
				} else {
					context.functions.editToken(response.body.token);
					this.setState(() => ({
						errorText: {}
					}));
					this.props.history.push('/task-manager');
				}
			}
		);
	};

	render() {
		return (
			<MyContext.Consumer>
				{(context) => {
					return (
						<div className="main">
							<Container className="mainContainer">
								<Logout history={this.props.history} />
								<h1>Create Account Page</h1>

								<Row>
									<Col lg="2"></Col>
									<Col lg="8">
										<Form className="form">
											<DataField
												title="Name and Surname"
												type="text"
												value={this.state.nameAndSurname}
												onChange={this.editNameAndSurname}
												errorText={this.state.errorText.name}
											/>
											<DataField
												title="Age"
												type="number"
												value={this.state.age}
												onChange={this.editAge}
												errorText={this.state.errorText.age}
											/>
											<DataField
												title="Email"
												type="email"
												value={this.state.email}
												onChange={this.editEmail}
												errorText={this.state.errorText.email}
											/>
											<DataField
												title="Password"
												type="password"
												value={this.state.password}
												onChange={this.editPassword}
												errorText={this.state.errorText.password}
											/>
											<DataField
												title="Retype Password"
												type="password"
												value={this.state.retypePassword}
												onChange={this.editRetypePassword}
											/>
											{!this.state.passwordsMatch ? (
												<p>Your passwords do not match</p>
											) : (
												<Button
													variant="primary"
													type="button"
													onClick={() => this.submitForm(context)}
												>
													Create Account
												</Button>
											)}
										</Form>
									</Col>
									<Col lg="2"></Col>
								</Row>
							</Container>
						</div>
					);
				}}
			</MyContext.Consumer>
		);
	}
}

export default CreateAccountPage;
