import request from 'request';
import apiServerEnv from './apiServerEnv';

export const apiCreateAccountRequest = async (nameAndSurname, age, email, password, callbackFunction) => {
	let formData = {
		name: nameAndSurname,
		email,
		age,
		password
	};
	await request(
		{
			method: 'POST',
			uri: `${apiServerEnv()}/users`,
			body: formData,
			json: true
		},
		async function(error, response, body) {
			if (error) {
				callbackFunction('there was an error', undefined);
			} else {
				callbackFunction(undefined, { response, body });
			}
		}
	);
};

export const apiLoginRequest = async (email, password, callbackFunction) => {
	let body = {
		email,
		password
	};
	await request(
		{
			method: 'POST',
			uri: `${apiServerEnv()}/users/login`,
			json: true,
			body
		},
		async function(error, response, body) {
			if (error) {
				console.log('there was an error', undefined);
			} else {
				callbackFunction(undefined, { response, body });
			}
		}
	);
};

export const apiReadProfileRequest = async (token, callbackFunction) => {
	let formData = {
		Authorization: token
	};
	await request(
		{
			method: 'GET',
			uri: `${apiServerEnv()}/users/me`,
			headers: formData,
			json: true
		},
		async function(error, response, body) {
			if (error) {
				callbackFunction('there was an error', undefined);
			} else {
				callbackFunction(undefined, { response, body });
			}
		}
	);
};

export const apiEditProfileItem = async (token, itemType, newName, callbackFunction) => {
	let formData = {
		Authorization: token
	};
	let body = {
		[itemType]: newName
	};
	await request(
		{
			method: 'PATCH',
			uri: `${apiServerEnv()}/users/me`,
			headers: formData,
			body,
			json: true
		},
		async function(error, response, body) {
			if (error) {
				callbackFunction('there was an error', undefined);
			} else {
				callbackFunction(undefined, { response, body });
			}
		}
	);
};

export const apiDeleteAccount = async (token, callbackFunction) => {
	let formData = {
		Authorization: token
	};
	await request(
		{
			method: 'DELETE',
			uri: `${apiServerEnv()}/users/me`,
			headers: formData,
			json: true
		},
		async function(error, response, body) {
			if (error) {
				callbackFunction('there was an error', error);
			} else {
				callbackFunction(undefined, { response, body });
			}
		}
	);
};

export const apiEditPassword = async (password, newPassword, email, token, callbackFunction) => {
	let formData = {
		Authorization: token
	};
	let body = { password, newPassword, email };
	await request(
		{
			method: 'PATCH',
			uri: `${apiServerEnv()}/users/updatePassword`,
			headers: formData,
			body,
			json: true
		},
		async function(error, response, body) {
			if (error) {
				callbackFunction('There was an error', error);
			} else {
				callbackFunction(undefined, { response, body });
			}
		}
	);
};
