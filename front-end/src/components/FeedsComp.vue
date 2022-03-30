<template>
<div>
  <div id="feeds">
    <FeedComp :posts="postsSnap" :platform="snap" class="feed"/>
    <FeedComp :posts="postsInsta" :platform="insta" class="feed"/>
    <FeedComp :posts="postsTikTok" :platform="tiktok" class="feed"/>
    <FeedComp :posts="postsTwitter" :platform="twitter" class="feed"/>
  </div>
</div>
</template>

<script>
import FeedComp from './FeedComp.vue'
import axios from 'axios'
export default {
  name: 'FeedsComp',
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.getPosts();
  },
  components: {
    FeedComp
  },
  computed: {
    postsSnap() {
      return this.posts.filter(post => post.platform === "Snapchat")
    },
    postsInsta() {
      return this.posts.filter(post => post.platform === "Instagram")
    },
    postsTikTok() {
      return this.posts.filter(post => post.platform === "TikTok")
    },
    postsTwitter() {
      return this.posts.filter(post => post.platform === "Twitter")
    },
    insta() {
      return 'Instagram'
    },
    snap() {
      return 'Snapchat'
    },
    tiktok() {
      return 'TikTok'
    },
    twitter() {
      return 'Twitter'
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

<style scoped>
#feeds {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.feed {
  width: 25%;
}

@media only screen and (max-width: 768px) {
  #feeds {
    flex-direction: column;
    justify-items: center;
  }

  .feed {
    width: 80%;
  }
}
</style>