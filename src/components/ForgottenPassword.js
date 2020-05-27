import React from 'react';
import { apiForgottenPassword } from './../constants/apiUserRequests';

class ForgottenPassword extends React.Component {
	state = {
		input: '',
		response: '',
	};
	forgottenPassword = () => {
		apiForgottenPassword(this.state.input, (err, res) => {
			if (err) {
				this.setState(() => ({ response: 'Please check your email and try again.' }));
				return console.log('error!!!');
			}
			this.setState(() => ({ response: "A new password has been sent to your email. As this is a learning project, it's probably in your spam folder." }));
		});
	};
	editInput = (e) => {
		e.persist();
		e.preventDefault();
		this.setState(() => ({ input: e.target.value }));
	};
	render() {
		return (
			<div>
				<h1>Forgotten Password</h1>
				<p>
					Please provide your email and a new password will be sent to you. We recommend that you change your
					password once you receive the new one. You can do this on the profile page.
				</p>
					<input type="email" value={this.state.input} onChange={this.editInput}></input>
					<button type="button" onClick={this.forgottenPassword}>
						Submit
					</button>
				{this.state.response && <p>{this.state.response}</p>}
			</div>
		);
	}
}

export default ForgottenPassword;
