import React from 'react';
import { MyContext } from './../../StateComponents/MyProvider';
import { apiDeleteAccount } from './../../constants/apiUserRequests';
import './DeleteAccount.scss';

class DeleteAccount extends React.Component {
    static contextType = MyContext;
    state = {
        requested: false
    }
    initialClick = () => {
        this.setState(() => ({
            requested: true
        }))
    }
    deleteYesClick = () => {
        console.log('delete account');
        console.log(this.context.state.token);
        apiDeleteAccount(this.context.state.token, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                console.log(response);
                this.context.functions.editToken('');
                this.props.history.push('/');
            }
        });
    }
    deleteNoClick = () => {
        this.setState(() => ({
            requested: false
        }))
    }

    render() {
        return (
            <div className='DeleteAccount__main'>
                {!this.state.requested && <button type='button' onClick={this.initialClick}>Delete Account</button>}
                {this.state.requested && 
                    <div>
                        <p>Are you sure you want to delte your account? This action cannot be undone.</p>
                        <button type='button' onClick={this.deleteYesClick}>Yes, I am sure.</button>
                        <button type='button' onClick={this.deleteNoClick}>No, cancel!!</button>
                    </div>
                }
            </div>
        )
    }
}

export default DeleteAccount;