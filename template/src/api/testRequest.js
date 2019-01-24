import fetch from './fetch'

export function getPersonByGet() {
  return fetch.get('/getPersonByGet')
}

export function getPersonByPost(params) {
  return fetch.post('/getPersonByPost', params)
}

export function getPersonByGet1() {
  return fetch({
    url: '/getPersonByGet'
  })
}

export function getPersonByPost1(params) {
  return fetch({
    url: '/getPersonByPost',
    method: 'post',
    data: params
  })
}
