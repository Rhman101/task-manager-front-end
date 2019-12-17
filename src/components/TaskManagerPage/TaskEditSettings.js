import React from 'react';
import { apiDeleteTask, apiToggleTaskCompleted } from './../../constants/apiRequests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './TaskEditSettings.scss';

const TaskEditSettings = (props) => {
	const clickDelete = (id, token) => {
		apiDeleteTask(id, token, (error, response) => {
			if (error) {
				console.log(error);
			} else {
				props.syncTasks();
			}
		});
	};

	const clickToggleComplete = (id, token, completed) => {
		apiToggleTaskCompleted(id, token, completed, (error, response) => {
			if (error) {
				console.log(error);
			} else {
				props.syncTasks();
			}
		});
	};
	return (
		<span className="TaskEditSettings">
			<FontAwesomeIcon
				icon={faTrashAlt}
				onClick={() => clickDelete(props.id, props.token)}
			></FontAwesomeIcon>
			<FontAwesomeIcon
				style={{ marginLeft: '10px' }}
				icon={props.completed ? faTimesCircle : faCheckCircle}
				onClick={() => clickToggleComplete(props.id, props.token, props.completed)}
			></FontAwesomeIcon>
		</span>
	);
};

export default TaskEditSettings;
