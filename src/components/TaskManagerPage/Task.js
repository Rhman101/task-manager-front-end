import React from 'react';
import TaskEditSettings from './TaskEditSettings';
import './Task.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSnowplow } from '@fortawesome/free-solid-svg-icons';

class Task extends React.Component {
	state = {
		displayTaskEditSettings: false
	};
	onMouseEnter = () => {
		this.setState(() => ({
			displayTaskEditSettings: true
		}));
	};
	onMouseLeave = () => {
		this.setState(() => ({
			displayTaskEditSettings: false
		}));
	};
	render() {
		return (
			<div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
				<p
					className={
						this.props.completed
							? 'Task__entry Task__entry--complete'
							: 'Task__entry Task__entry--incomplete'
					}
				>
					<FontAwesomeIcon icon={this.props.completed ? faCheckSquare : faSnowplow} fixedWidth />
					<span> </span>
					{this.props.name}
					{this.state.displayTaskEditSettings && (
						<TaskEditSettings
							token={this.props.token}
							id={this.props.id}
							syncTasks={this.props.syncTasks}
							completed={this.props.completed}
						/>
					)}
				</p>
			</div>
		);
	}
}

export default Task;
