const TOKEN = localStorage.getItem('auth-token');
const URL_BASE = 'http://localhost:5000/users';

export function getAllUsuarios(){
  return fetch(URL_BASE, {
    method: 'GET',
    headers: {
      authorization: TOKEN
    },
  }).then(response => {
    return response.json()
  })
}

export function getUsuario(id){
  return fetch(`${URL_BASE}/${id}`, {
    method: 'GET',
    headers: {
      authorization: TOKEN
    },
  }).then(response => {
    return response.json()
  })
}

export function postUsuario(usuario){
  return fetch(URL_BASE, {
    method: 'POST',
    headers: {
      authorization: TOKEN
    },
    body: JSON.stringify(usuario)
  }).then(response => {
    return response.json()
  })
}

export function patchUsuario(id, usuario){
  return fetch(`${URL_BASE}/${id}`, {
    method: 'PATCH',
    headers: {
      authorization: TOKEN
    },
    body: JSON.stringify(usuario)
  }).then(response => {
    return response.json()
  })
}

export function deleteUsuario(id){
  return fetch(`${URL_BASE}/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: TOKEN
    },
  }).then(response => {
    return response.json()
  })
}