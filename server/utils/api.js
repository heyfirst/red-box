const axios = require('axios')
const config = require('../../config')

const createApiInstance = () => (
  axios.create({
    baseURL: 'https://api.dribbble.com/v1',
    headers: {
      'Authorization': `Bearer ${config.DribbleClientId}`
    }
  })
)

const handleResponse = (response) => {
  if (response.data) {
    return Promise.resolve(response)
  }
  return Promise.reject(response)
}

const catchError = e => Promise.reject(e.response.data)

module.exports = {
  get: path => (
    createApiInstance()
      .get(path)
      .then(handleResponse)
      .catch(catchError)
  ),
  post: (path, body = {}, headers = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'POST',
        headers,
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  put: (path, body = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'PUT',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  )
}
