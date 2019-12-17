import React from 'react';
import { MyContext } from './../../StateComponents/MyProvider';
import { apiEditPassword } from './../../constants/apiUserRequests';
import './EditPassword.scss';

class EditPassword extends React.Component {
	static contextType = MyContext;
	state = {
		active: false,
		emailText: '',
		oldPasswordText: '',
		newPasswordText: '',
		retypePasswordText: ''
	};
	editActive = () => {
		this.setState(() => ({
			active: true
		}));
	};
	editEmailText = (event) => {
		event.persist();
		this.setState(() => ({
			emailText: event.target.value
		}))
	}
	editOldPasswordText = (event) => {
		event.persist();
		this.setState(() => ({
			oldPasswordText: event.target.value
		}));
	};
	editNewPasswordText = (event) => {
		event.persist();
		this.setState(() => ({
			newPasswordText: event.target.value
		}));
	};
	editRetypePasswordText = (event) => {
		event.persist();
		this.setState(() => ({
			retypePasswordText: event.target.value
		}));
	};
	submitForm = (event) => {
		event.persist();
		event.preventDefault();
		apiEditPassword(
			this.state.oldPasswordText,
			this.state.newPasswordText,
			this.state.emailText,
			this.context.state.token,
			(error, response) => {
				if (error) {
					console.log(error);
				} else {
					this.context.functions.editToken(response.body.token)
				}
			}
		);
	};
	render() {
		return (
			<div className='EditPassword__main'>
				{!this.state.active ? (
					<button type="button" onClick={this.editActive}>
						Edit Password
					</button>
				) : (
					<form onSubmit={this.submitForm}>
						<p>
							Retype Email:
							<input
								type="email"
								onChange={this.editEmailText}
								value={this.state.emailText}
							></input>
						</p>
						<p>
							Old Password:
							<input
								type="password"
								onChange={this.editOldPasswordText}
								value={this.state.oldPasswordText}
							></input>
						</p>
						<p>
							New Password:
							<input
								type="password"
								onChange={this.editNewPasswordText}
								value={this.state.newPasswordText}
							></input>
						</p>
						<p>
							Retype New Password:
							<input
								type="password"
								onChange={this.editRetypePasswordText}
								value={this.state.retypePasswordText}
							></input>
						</p>
						<button type="submit">Submit</button>
					</form>
				)}
			</div>
		);
	}
}

export default EditPassword;
