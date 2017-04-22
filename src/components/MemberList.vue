<template>
  <div id="member-list-root">
    <ul v-if="list != null" id="member-list">
      <li v-for="item in list">
        <img class="avatar" :src="item.avatar_url">
        <div class="content">
          <p class="title">{{item.name || item.login}}</p>
          <a class="url" :href="item.html_url">{{item.login}}</a>
        </div>
      </li>
    </ul>
    <p v-if="list == null">
      获取中...
    </p>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  mounted () {
    axios.get('https://api.github.com/orgs/neu-1923/members')
      .then(response => {
        this.list = response.data.map(item => {
          return {
            name: null,
            url: item.url,
            html_url: item.html_url,
            login: item.login,
            avatar_url: item.avatar_url
          }
        })
        this.list.forEach(member => {
          axios.get(member.url)
            .then(res => {
              member.name = res.data.name
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


<style scoped>
div#member-list-root {
  padding: 8px;
}

ul#member-list  {
  display: block;
  margin: auto;
  padding: 0;
  width: 400px;
  max-width: 100%;
}

ul#member-list>li {
  display: flex;
  height: 50px;
  margin-bottom: 8px;
  padding-top: 8px;
  border-top: 1px solid lightgray;
}

ul#member-list>li:first-child {
  border-top: none;
}

ul#member-list>li .avatar {
  width: 50px;
  height: 50px;
  border: 1px solid #2c3e50;
  border-radius: 50%;
}

ul#member-list>li .content {
  display: flex;
  flex-direction: column;
}

ul#member-list>li .content * {
  margin: 0;
  text-align: left;
  margin-left: 16px;
}

a,
a:visited,
a:active {
  text-decoration: none;
  color: darkgray;
}

ul#member-list>li .content .title {
  color: #2c3e50;
  font-weight: bold;
}

ul#member-list>li .content .url {
  color: darkgray;
}
</style>
