import React from 'react';

class ForgottenPassword extends React.Component {
    render() {
        return (
            <div>
                <h1>Forgotten Password</h1>
                <p>Please provide your email and a new password will be sent to you. We recommend that you change your password once you receive the new one. You can do this on the profile page.</p>
                <form>
                    <input type='email' value></input>
                    <button type='submit'></button>
                </form>
            </div>
        )
    }
}

export default ForgottenPassword;