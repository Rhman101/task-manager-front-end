import React from 'react';
import { apiAddTask } from './../../constants/apiRequests';
import './AddTask.scss';

class AddTask extends React.Component {
    state = {
        textInput: ''
    }
    taskType = (event) => {
        event.persist();
        event.preventDefault();
        this.setState(() => ({
            textInput: event.target.value
        }))
    }
    addButton = async (token) => {
        await apiAddTask(this.state.textInput, token, (error, response) => {
            if (error) {
                console.log('error', error);
            } else if (response.body.errors) {
                console.log('errors', response.body.errors);
            } else {
                this.props.syncTasks();
                this.setState(() => ({
                    textInput: ''
                }))
            }
        })
    }
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.addButton(this.props.token);
        }
    }
    render() {
        return (
            <div>
                <input onKeyPress={this.handleKeyPress} className='AddTask__input' type='text' onChange={this.taskType} value={this.state.textInput}></input>
                <button className='AddTask__button' type='button' onClick={() => this.addButton(this.props.token)}>Add</button>
            </div>
        )
    }
}

export default AddTask;