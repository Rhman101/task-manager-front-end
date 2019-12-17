import React from 'react';
import { MyContext } from './../../StateComponents/MyProvider';
import TaskList from './TaskList';
import './TaskManagerPage.scss';
import { Container } from 'react-bootstrap';

class TaskManager extends React.Component {
	render() {
		return (
			<MyContext.Consumer>
				{(context) => {
					return (
						<div className='TaskManagerPage__main'>
							<Container>
								<h1>Task Manager Page</h1>
								<TaskList token={context.state.token} />
							</Container>
						</div>
					);
				}}
			</MyContext.Consumer>
		);
	}
}

export default TaskManager;
