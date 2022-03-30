<template>
  <div>
    <IncomeComp :posts="allPosts" :sponsors="allSponsors" :affiliate="allAffiliate" />
  </div>
</template>

<script>
import axios from 'axios'
import IncomeComp from '../components/IncomeComp.vue'
export default {
  name: 'IncomeView',
  data() {
    return {
      posts: [],
      sponsors: [],
      affiliate: []
    }
  },
  created() {
    this.getPosts()
    this.getSponsors()
    this.getAffiliate()
  },
  components: {
    IncomeComp
  },
  computed: {
    allPosts() {
      return this.posts;
    },
    allSponsors() {
      return this.sponsors;
    },
    allAffiliate() {
      return this.affiliate;
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
    },
    async getAffiliate() {
      try {
        let response = await axios.get("/api/affiliate");
        this.affiliate = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getSponsors() {
      try {
        let response = await axios.get("/api/sponsors");
        this.sponsors = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>