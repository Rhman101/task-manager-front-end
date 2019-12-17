import React from 'react';
import { MyContext } from './../../StateComponents/MyProvider';
import { apiEditProfileItem } from './../../constants/apiUserRequests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

class ProfileEntry extends React.Component {
	static contextType = MyContext;
	state = {
		constantText: {
			name: 'Name: ',
			email: 'Email: ',
			age: 'Age: '
		},
		displayEditButton: false,
		displayEditInput: false,
		editInputValue: ''
	};
	onMouseEnter = () => {
		this.setState(() => ({
			displayEditButton: true
		}));
	};
	onMouseLeave = () => {
		this.setState(() => ({
			displayEditButton: false,
			displayEditInput: false
		}));
	};
	onEditButton = () => {
		this.setState(() => ({
			displayEditInput: true
		}));
	};
	onEditInput = (event) => {
		event.preventDefault();
		event.persist();
		this.setState(() => ({
			editInputValue: event.target.value
		}));
	};
	submitEdit = () => {
		apiEditProfileItem(this.context.state.token, this.props.type, this.state.editInputValue, (error, response) => {
			if (error) {
				console.log('error', error);
			} else {
				this.props.getProfile();
				this.setState(() => ({
					editInputValue: ''
				}));
			}
		});
	};

	render() {
		return (
			<div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
				<p>
					{this.state.constantText[this.props.type]}
					{this.props.item}
					{this.state.displayEditButton && (
						<button type="button" onClick={this.onEditButton}>
							<FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
						</button>
					)}
				</p>
				{this.state.displayEditInput && this.state.displayEditButton && (
					<div>
						<input type="text" value={this.state.editInputValue} onChange={this.onEditInput}></input>
						<button type="button" onClick={this.submitEdit}>
							Submit
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default ProfileEntry;
