import React from 'react';
import { Form } from 'react-bootstrap';

const DataField = (props) => {
	return (
		<div>
			<Form.Group>
				<Form.Label>{props.title}</Form.Label>
				<Form.Control type={props.type} onChange={props.onChange} value={props.value}></Form.Control>
				{props.errorText && <Form.Text>{props.errorText}</Form.Text>}
			</Form.Group>
		</div>
	);
};

export default DataField;
