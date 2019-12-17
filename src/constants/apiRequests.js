import request from 'request';
import apiServerEnv from './apiServerEnv';

export const apiLogoutRequest = async (token, callbackFunction) => {
  console.log(apiServerEnv());
  let formData = {
    Authorization: token
  }
    await request({
      method: 'POST', 
      uri: `${apiServerEnv()}/users/logoutall`,
      headers: formData,
      json: true,
    }, async function (error, response, body) {
      if (error) {
        callbackFunction('there was an error', undefined)
      } else {
        callbackFunction(undefined, { response, body })
      }
    })
}

export const apiReadTasks = async (token, callbackFunction) => {
  let formData = {
    Authorization: token
  }
  await request({
    method: 'GET', 
    uri: `${apiServerEnv()}/tasks`,
    headers: formData,
    json: true
  }, async function (error, response, body) {
    if (error) {
      callbackFunction('there was an error', undefined)
    } else {
      callbackFunction(undefined, { response, body })
    }
  })
}

export const apiAddTask = async (taskName, token, callbackFunction) => {
  let formData = {
    Authorization: token
  }
  let body = {
    task: taskName
  }
  await request({
    method: 'POST', 
    uri: `${apiServerEnv()}/tasks`,
    headers: formData,
    body,
    json: true
  }, async function (error, response, body) {
    if (error) {
      callbackFunction('there was an error', undefined)
    } else {
      callbackFunction(undefined, { response, body })
    }
  })
}

export const apiDeleteTask = async (id, token, callbackFunction) => {
  let formData = {
    Authorization: token
  }
  await request({
    method: 'DELETE', 
    uri: `${apiServerEnv()}/tasks/${id}`,
    headers: formData,
    json: true
  }, async function (error, response, body) {
    if (error) {
      callbackFunction('there was an error', undefined)
    } else {
      callbackFunction(undefined, { response, body })
    }
  })
}

export const apiToggleTaskCompleted = async (id, token, completed, callbackFunction) => {
  let formData = {
    Authorization: token
  }
  let body = {
    completed: !completed
  }
  await request({
    method: 'PATCH', 
    uri: `${apiServerEnv()}/tasks/${id}`,
    headers: formData,
    body,
    json: true
  }, async function (error, response, body) {
    if (error) {
      callbackFunction('there was an error', undefined)
    } else {
      callbackFunction(undefined, { response, body })
    }
  })
}