import axios from 'axios'
const baseUrl = '/api/notes'


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  console.log("New note added")
  console.log(newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    console.log("Note ID: " + id + " removed")
    return request.then(response => response.data)
}

export default { getAll, create, update, remove }