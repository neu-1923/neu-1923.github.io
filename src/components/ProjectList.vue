<template>
  <div>
    <ul v-if="list != null" class="repo-list">
      <li v-for="item in list" class="repo">
        <a :href="item.html_url"> {{item.name}} </a>
        <p>{{item.description}}</p>
        <p v-if="item.commit != null" class="repo-commit">
          - Last Commit: 
          <span>{{item.commit.commit.message || ""}}</span>
          by
          <span>{{item.commit.commit.author.name}}</span>
          @
          <span>{{item.commit.commit.author.date}}</span>
        </p>
      </li>
    </ul>
    <p v-if="list == null">
      获取中...
    </p>
  </div>
</template>


<script>
import githubApi from '@/utils/github-api'
const {getOrgRepos, getRepoCommits} = githubApi

export default {

  mounted () {
    getOrgRepos()
      .then(data => {
        this.list = data.map(repo => ({
          name: repo.name,
          html_url: repo.html_url,
          description: repo.description,
          commit: null
        }))
        this.list.forEach(repo => {
          getRepoCommits(repo, 0, 1)
          .then(data => {
            repo.commit = data[0]
            console.log(repo)
          })
        })
      })
  },

  data () {
    return {
      list: null
    }
  }
}

</script>


<style>

.repo-list {
  list-style: none;
  padding: 0;
}

.repo {
  width: 400px;
  max-width: 100%;
  text-align: left;
  margin: auto;
  border-top: 1px gray solid;
}

.repo:first-child {
  border-top: none;
}

.repo a, .repo p{
  margin: 4px 0;
}

.repo .repo-commit {
  margin-left: 8px;
  font-size: 14px;
  color: gray
}

</style>
