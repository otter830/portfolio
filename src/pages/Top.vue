<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/mv.jpg">
    <HelloWorld msg="MY PORTFOLIO"/>
    <ul>
      <li>
        <PageChanger linkText="ABOUT" linkUrl="/about"/>
      </li>
      <li>
        <PageChanger linkText="CONTACT" linkUrl="/contact"/>
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import PageChanger from '../components/PageChanger.vue'

export default {
  name: 'Top',
  components: {
    HelloWorld,
    PageChanger
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
