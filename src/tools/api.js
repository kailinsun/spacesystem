import axios from 'axios'

// axios.defaults.baseURL = '/api'

const MakeGet = function (url) {
  return (params = {}) => { return axios.get(url, {params}).then(res => res.data) }
}

const MakePost = function (url) {
  return (params) => { return axios.post(url, params).then(res => res.data) }
}

const MakePut = function (url) {
  return (params) => { return axios.put(url, params).then(res => res.data) }
}

const MakeDelete = function (url) {
  return (params) => { return axios.delete(url, {data: params}).then(res => res.data) }
}

export {
  MakeGet,
  MakePost,
  MakePut,
  MakeDelete
}
// export const getUsers = MakeGet(`/users`)