const TOKEN_LOCAL = localStorage.getItem('auth-token');
const URL_BASE = 'http://localhost:5000';

export function getAllObjects(TOKEN, ROTA){
  return fetch(URL_BASE + ROTA, {
    method: 'GET',
    headers: {
      authorization: TOKEN ? TOKEN : TOKEN_LOCAL
    },
  }).then(response => {
    return response.json()
  })
}

export function getObject(TOKEN, ROTA, id){
  return fetch(`${URL_BASE+ROTA}/${id}`, {
    method: 'GET',
    headers: {
      authorization: TOKEN ? TOKEN : TOKEN_LOCAL
    },
  }).then(response => {
    return response.json()
  })
}

export function postObject(TOKEN, ROTA, object){
  return fetch(URL_BASE+ROTA, {
    method: 'POST',
    headers: {
      authorization: TOKEN ? TOKEN : TOKEN_LOCAL
    },
    body: JSON.stringify(object)
  }).then(response => {
    return response.json()
  })
}

export function patchObject(TOKEN, ROTA, id, object){
  return fetch(`${URL_BASE+ROTA}/${id}`, {
    method: 'PATCH',
    headers: {
      authorization: TOKEN ? TOKEN : TOKEN_LOCAL
    },
    body: JSON.stringify(object)
  }).then(response => {
    return response.json()
  })
}


export function postInteract(TOKEN, ROTA, id, object){
  return fetch(`${URL_BASE+ROTA}/${id}`, {
    method: 'POST',
    headers: {
      authorization: TOKEN ? TOKEN : TOKEN_LOCAL
    },
    body: JSON.stringify(object)
  }).then(response => {
    return response.json()
  })
}


export function deleteObject(TOKEN, ROTA, id){
  return fetch(`${URL_BASE+ROTA}/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: TOKEN ? TOKEN : TOKEN_LOCAL
    },
  }).then(response => {
    return response.json()
  })
}