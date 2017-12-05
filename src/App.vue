<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
html{
  font-size: 62.5%;
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
body {
  font-size: 1.4rem;
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
body {
  overflow: hidden;
}
li {
  list-style: none;
}
p {
  padding: 0;
  margin: 0;
}
.text-center {
  text-align: center;
}
.icl-mr-md {
  margin-top: 20px;
}
.icl-pd-md {
  padding: 20px;
}
.text-right  {
  text-align: right;
}
.text-center {
  text-align: center;
}
</style>
