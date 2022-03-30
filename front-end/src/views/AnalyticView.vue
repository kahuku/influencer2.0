<template>
  <div>
    <AnalyticComp :posts="allPosts"/>
  </div>
</template>

<script>
import axios from 'axios'
import AnalyticComp from '../components/AnalyticComp.vue'
export default {
  name: 'AnalyticView',
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.getPosts()
  },
  components: {
    AnalyticComp
  },
  computed: {
    allPosts() {
      return this.posts;
    }
  },
  methods: {
    async getPosts() {
      try {
        let response = await axios.get("/api/posts");
        this.posts = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>