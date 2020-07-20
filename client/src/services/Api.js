import axios from 'axios'

export default () => {
  // eslint-disable-next-line indent
    return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
