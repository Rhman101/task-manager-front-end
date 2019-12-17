import React from 'react';
import { MyContext } from '../../StateComponents/MyProvider';
import { apiLoginRequest } from '../../constants/apiUserRequests';
import { Button, Form } from 'react-bootstrap';
import './Login.scss';

class Login extends React.Component {
	static contextType = MyContext;
	state = {
		emailInput: '',
		passwordInput: '',
		invalidLogin: false
	};

	onSubmit = (event) => {
		event.persist();
		event.preventDefault();
		apiLoginRequest(this.state.emailInput, this.state.passwordInput, (error, response) => {
			if (error) {
				console.log(error);
			} else if (response.response.statusCode !== 200) {
				console.log('error', response);
				this.setState(() => ({
					invalidLogin: true
				}));
			} else {
				this.context.functions.editToken(response.body.token);
			}
		});
	};

	onEditEmail = (event) => {
		event.persist();
		event.preventDefault();
		this.setState(() => ({
			emailInput: event.target.value
		}));
	};

	onEditPassword = (event) => {
		event.persist();
		event.preventDefault();
		this.setState(() => ({
			passwordInput: event.target.value
		}));
	};
	onForgottenPasswordButtonClick = () => {
		this.props.history.push('/forgottenpassword');
	};

	render() {
		return (
			<div className='Login__main'>
				<p>You are not logged in. Log in below or sign up above.</p>
				<Form onSubmit={this.onSubmit}>
					<Form.Group>
						<Form.Label>Email:</Form.Label>
						<Form.Control
							type="email"
							onChange={this.onEditEmail}
							value={this.state.emailInput}
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							onChange={this.onEditPassword}
							value={this.state.passwordInput}
						></Form.Control>
					</Form.Group>
					<Button className='loginButton' variant="primary" type="submit">
						Login
					</Button>
					{this.state.invalidLogin && <p>Invalid login. Please try again.</p>}
				</Form>
				<Button className='forgottenPasswordButton' type="button" variant="secondary" onClick={this.onForgottenPasswordButtonClick}>
					Forgotten Password?
				</Button>
			</div>
		);
	}
}

export default Login;
