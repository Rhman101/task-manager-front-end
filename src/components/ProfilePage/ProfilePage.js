import React from 'react';
import { MyContext } from './../../StateComponents/MyProvider';
import { apiReadProfileRequest } from './../../constants/apiUserRequests';
import ProfileEntry from './ProfileEntry';
import DeleteAccount from './DeleteAccount';
import Logout from './../Logout';
import EditPassword from './EditPassword';
import { Container } from 'react-bootstrap';
import './ProfilePage.scss';

class ProfilePage extends React.Component {
	static contextType = MyContext;
	state = {
		name: '',
		email: '',
		age: ''
	};
	getProfile = () => {
		apiReadProfileRequest(this.context.state.token, (error, response) => {
			if (error) {
				console.log(error);
			} else {
				this.setState(() => ({
					name: response.body.name,
					email: response.body.email,
					age: response.body.age
				}));
			}
		});
	};

	componentDidMount = () => {
		this.getProfile();
	};
	render() {
		return (
			<div className="ProfilePage__main">
				<Container>
					<h1>Profile Page</h1>
					{this.state.name && (
						<ProfileEntry type="name" item={this.state.name} getProfile={this.getProfile} />
					)}
					{this.state.age && <ProfileEntry type="age" item={this.state.age} getProfile={this.getProfile} />}
					<EditPassword />
					<Logout history={this.props.history} />
					<DeleteAccount history={this.props.history} />
				</Container>
			</div>
		);
	}
}

export default ProfilePage;
