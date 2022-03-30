<template>
  <div id="HomeView">
    <h2>Welcome to ɪɴғʟᴜᴇɴᴄᴇʀ</h2>
    <h3>Become a star</h3>

    <Welcome/>
  </div>
</template>

<script>
import Welcome from '../components/WelcomeComp.vue'
export default {
  name: 'HomeView',
  components: {
    Welcome
  }
}
</script>

<style scoped>
#HomeView {
  margin: 0px;
  min-height: 73vh;
}

h1, h2, h3, h4, h5, h6 {
  color: #9856c8;
}

h2 {
  font-size: 2.5em;
  margin: 5px;
}

h3 {
  font-size: 2em;
  margin: 5px;
}
</style>