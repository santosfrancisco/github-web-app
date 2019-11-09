import axios from 'axios'

export const gql = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.GITHUB_TOKEN}`
  },
  timeout: 3000
})

export default axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 3000
})
