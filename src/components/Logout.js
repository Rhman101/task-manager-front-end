import React from 'react';
import { MyContext } from '../StateComponents/MyProvider';
import { apiLogoutRequest } from '../constants/apiRequests';
import { Button } from 'react-bootstrap';
import './Logout.scss';

class Logout extends React.Component {
    render() {
        return (
            <MyContext.Consumer>
                {(context) => {
                    const logoutButtonClicked = () => {
                        apiLogoutRequest(context.state.token, (error, response) => {
                            if (error) {
                                console.log(error);
                            } else {
                                if (response.response.statusCode === 200) {
                                    context.functions.editToken('');
                                    this.props.history.push('/')
                                }
                            }
                        })
                    }
                    return (
                        <div className='Logout__main'>
                            {context.state.token && <Button className='Logout__button' type='button' onClick={logoutButtonClicked}>Logout</Button>}
                        </div>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}

export default Logout;