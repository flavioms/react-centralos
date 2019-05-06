const TOKEN = localStorage.getItem('auth-token');
const URL_BASE = 'http://localhost:5000';

export function getAllObjects(BASE_URL){
  return fetch(URL_BASE + BASE_URL, {
    method: 'GET',
    headers: {
      authorization: TOKEN
    },
  }).then(response => {
    return response.json()
  })
}

export function getObject(BASE_URL, id){
  return fetch(`${URL_BASE+BASE_URL}/${id}`, {
    method: 'GET',
    headers: {
      authorization: TOKEN
    },
  }).then(response => {
    return response.json()
  })
}

export function postObject(BASE_URL, object){
  return fetch(URL_BASE+BASE_URL, {
    method: 'POST',
    headers: {
      authorization: TOKEN
    },
    body: JSON.stringify(object)
  }).then(response => {
    return response.json()
  })
}

export function patchObject(BASE_URL, id, object){
  return fetch(`${URL_BASE+BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      authorization: TOKEN
    },
    body: JSON.stringify(object)
  }).then(response => {
    return response.json()
  })
}

export function deleteObject(BASE_URL, id){
  return fetch(`${URL_BASE+BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: TOKEN
    },
  }).then(response => {
    return response.json()
  })
}