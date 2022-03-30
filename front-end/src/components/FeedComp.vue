<template>
<div class="wrapper">
    <div class="posts">
        <h2 :class="platformComp">{{platform}}</h2>
        <div v-show="emptyComp">
          <p>No posts to display</p>
        </div>
        <div class="post" v-for="post in posts" :key="post.id">
            <div class="image">
                <img :src="post.path">
            </div>
            <div class="post-metadata">
                <h4>{{Number(post.likes).toLocaleString("en-US")}} likes</h4>
                <h4>{{Number(post.comments).toLocaleString("en-US")}} comments</h4>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'FeedComp',
  props: {
      posts: Array,
      platform: String,
      empty: Boolean
  },
  computed: {
    platformComp() {
      if (this.platform === "Snapchat"){
        return "Snapchat"
      }
      else if (this.platform === "Instagram"){
        return "Instagram"
      }
      else if (this.platform === "TikTok"){
        return "TikTok"
      }
      else if (this.platform === "Twitter"){
        return "Twitter"
      }
      return null;
    },
    emptyComp() {
      if (this.posts.length > 0){
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.posts {
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin: 15px;
  color: black;
  align-items: center;
  flex-direction: column;
  min-width: 90%;
  background-color: #BBB;
}

.h2 {
  padding: 0px;
  margin: 0px;
  font-weight: bolder;
}

.Snapchat {
  color: yellow;
}

.Instagram {
  color: #bc2a8d;
}

.TikTok {
  color: black;
}

.Twitter {
  color: skyblue;
}

.post {
  margin: 25px;
  /* width: 200px; */
  border: 2px solid #333;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.post img {
  max-width: 250px;
  object-fit: cover;
  max-width: 100%;
}

.post .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.post-metadata {
    color: black;
}
</style>