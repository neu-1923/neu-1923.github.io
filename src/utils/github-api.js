import axios from 'axios'

export default {

  getOrgMembers () {
    return axios.get('https://api.github.com/orgs/neu-1923/members').then(res => res.data)
  },

  getUserInfo (userUrl) {
    return axios.get(userUrl).then(res => res.data)
  },

  getOrgRepos () {
    return axios.get('https://api.github.com/orgs/neu-1923/repos').then(res => res.data)
  }

}
