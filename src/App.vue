<template>
  <div id="app">
    <p id="header">
      <img src="./assets/logo.png">
      <span class="title">NEU Github Organization</span>
    </p>
    <nav id="navigator">
      <ul>
        <li v-for="link in links">
          <router-link :to="link.path">{{link.title}}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      links: [
        {
          title: '首页',
          path: '/'
        },
        {
          title: '加入我们',
          path: 'join'
        },
        {
          title: '公共成员列表',
          path: 'member'
        }
      ]
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

<style scoped>

#navigator {
  display: block;
}

#navigator > ul {
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
}

#navigator > ul > li {
  margin: 16px;
}

a {
    text-decoration: none;
    color: #2c3e50;
    padding: 2px 8px;
    border-radius: 5px;
}

.router-link-active {
    text-decoration: none;
    /*background: #2c3e50;
    color: white;*/
}

#header {
  margin: 0;
}

.title {
  font-size: 36px;
  vertical-align: middle;
}

img {
  width: 60px;
  height: 60px;
  vertical-align: middle;
}

@media(max-width: 767px) {
  #app {
    margin-top: 20px;
  }
  img {
    width: 30px;
    height: 30px;
  }
  .title {
    font-size: 18px;
  }
  #navigator > ul > li {
    margin: 4px;
    font-size: 14px;
  }
}

</style>
