import React from 'react';
import Task from './Task';
import AddTask from './AddTask';
import { apiReadTasks } from './../../constants/apiRequests';
import { MyContext } from './../../StateComponents/MyProvider';

class TaskList extends React.Component {
	static contextType = MyContext;
	state = {
		tasks: []
	};
	syncTasks = () => {
		apiReadTasks(this.props.token, (error, response) => {
			if (error) {
				console.log('error', error);
			} else if (response.body.errors || response.body.error) {
				if (response.body.error === 'Please authenticate') {
					this.context.functions.editToken('');
				}
			} else {
				this.setState(() => ({
					tasks: response.body
				}));
			}
		});
	};
	componentDidMount() {
		this.syncTasks();
	}

	render() {
		return (
			<div>
				{this.state.tasks.length > 0 ? (
					this.state.tasks.map((elem) => (
						<Task
							syncTasks={() => this.syncTasks(this.props.token)}
							token={this.props.token}
							key={elem._id}
							id={elem._id}
							name={elem.task}
							completed={elem.completed}
						/>
					))
				) : (
					<p>You have no tasks! Make some!</p>
				)}
				<AddTask syncTasks={() => this.syncTasks(this.props.token)} token={this.props.token} />
			</div>
		);
	}
}

export default TaskList;
