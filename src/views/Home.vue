<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png">
    <input class="input" type="text" placeholder="Search">
    <span class="icon is-left"></span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
