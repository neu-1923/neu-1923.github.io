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
  },

  getRepoCommits (repo, page, perPage) {
    page = page || 0
    perPage = perPage || 5
    return axios({
      method: 'GET',
      url: `https://api.github.com/repos/neu-1923/${repo.name}/commits`,
      data: {page, per_page: perPage}
    }).then(res => res.data)
  }

}
