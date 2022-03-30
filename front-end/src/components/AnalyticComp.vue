<template>
<div id="container">
    <div id="left">
        <div id="top-post" class="post">
            <div class="title">
                <h1>Top Post</h1>
            </div>
            <div class="image">
                <img :src="topPost.path">
            </div>
            <div class="metadata">
                <h2>Likes: {{Number(topPost.likes).toLocaleString("en-US")}}</h2>
                <h2>Comments: {{Number(topPost.comments).toLocaleString("en-US")}}</h2>
            </div>
        </div>
        <div id="rising-post" class="post">
            <div class="title">
                <h1>Rising Post</h1>
            </div>
            <div class="image">
                <img :src="risingPost.path">
            </div>
            <div class="metadata">
                <h2>Likes: {{Number(risingPost.likes).toLocaleString("en-US")}}</h2>
                <h2>Comments: {{Number(risingPost.comments).toLocaleString("en-US")}}</h2>
            </div>
        </div>
    </div>
    
    <div id="dashboard">
        <div id="dash-left">
            <div class="dash-item">
                <div class="image">
                    <img src="/images/heart-icon.png">
                </div>
                <h1>{{totalLikes.toLocaleString("en-US")}} Likes</h1>
            </div>
            <div class="dash-item">
                <div id="gauge-wrapper" name="g">
                    <vue-gauge :refid="'gauge'" :options="{ 
                    'arcOverEffect':false, 'chartWidth':350, 'arcColors':['black','red','orange','yellow','green','blue'],
                     'needleValue':engagementScore, 'arcDelimiters':[15, 30, 45, 60, 85]}"></vue-gauge>
                </div>
                <h1 :class="engagementColor">{{engagementScore}}</h1>
                <h1>Engagement Score</h1>
            </div>
        </div>
        <div id="dash-right">
            <div class="dash-item">
                <h1>New Profiles Reached</h1>
                <div id="chart-wrapper">
                    <GoogleChart />
                </div>
            </div>
            <div class="dash-item">
                <h1>Followers</h1>
                <div id="graph-wrapper">
                    <GoogleGraph />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VueGauge from 'vue-gauge';
import GoogleChart from './GoogleChart.vue'
import GoogleGraph from './GoogleGraph.vue'
export default {
    name: 'AnalyticComp',
    props: {
        posts: Array,
    },
    components: {
        VueGauge,
        GoogleChart,
        GoogleGraph
    },
    computed: {
        topPost() {
            let topScore = 0;
            let topIndex = 0;
            for (let i = 0; i < this.posts.length; i++){
                let post = this.posts[i];
                let score = Number(post.likes) + Number(post.comments) * 2;
                if (score > topScore){
                    topScore = score;
                    topIndex = i;
                }
            }
            console.log(topIndex);
            return this.posts[topIndex]
        },
        risingPost() {
            let rand = Math.floor(Math.random() * (this.posts.length));
            console.log(rand);
            return this.posts[rand]
        },
        totalLikes() {
            let total = 0;
            for (let i = 0; i < this.posts.length; i++){
                total += Number(this.posts[i].likes);
            }
            return total
        },
        engagementColor() {
            if (this.engagementScore >= 85){
                return 'blue'
            }
            else if (this.engagementScore >= 60){
                return 'green'
            }
            else if (this.engagementScore >= 45) {
                return 'yellow'
            }
            else if (this.engagementScore >= 30){
                return 'orange'
            }
            else if (this.engagementScore >= 15){
                return 'red'
            }
            else {
                return 'black'
            }
        },
        engagementScore() {
            let z = Math.floor(Math.random() * 100) + 1;
            console.log(z);
            return z
        }
    }
}
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

#left {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.post {
  margin: 25px;
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #BBB;
  min-height: 300px;
  max-height: fit-content;
}

h1 {
    margin: 0px;
    color: black;
}

img {
  min-width: 200px;
  max-width: 100%;
}

.image {
  display: flex;
  justify-content: center;
  width: 100%;
  width: 98%;
  margin-bottom: 20px;
  border: 2px solid #FFF;
}

.metadata {
    color: black;
}

.h2 {
  padding: 0px;
  margin: 0px;
  font-weight: bolder;
}

#dashboard {
  margin: 25px;
  margin-left: 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #BBB;
  min-height: 800px;
  min-width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#dash-left {
    display: flex;
    /* border: 2px solid red; */
    min-width: 47%;
    margin: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

#dash-right {
    /* border: 2px solid blue; */
    min-width: 47%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.dash-item {
    display: flex;
    /* border: 2px solid purple; */
    width: 90%;
    height: 45%;
    margin: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

.dash-item .image {
    border: none;
    max-width: 40%;
}

.dash-item img {
  max-width: 250px;
  object-fit: cover;
  max-width: 100%;
}

#gauge-wrapper {
    display: flex;
    min-width: 60%;
    padding: 0px;
    margin: 0px;
    justify-content: center;
    max-width: 60%;
}

.black {
    color: black;
}

.red {
    color: red;
}

.orange {
    color: orange;
}

.yellow {
    color: yellow;
}

.green {
    color: green;
}

.blue {
    color: blue;
}

#chart-wrapper {
    display: flex;
    min-width: 60%;
    padding: 0px;
    margin: 0px;
    justify-content: center;
    max-width: 60%;
}

@media only screen and (max-width: 861px) {
    #container {
        flex-direction: column;
        justify-items: center;
        align-items: center;
    }

    #left {
        flex-direction: row;
        width: 100%;
    }
    
    #dashboard {
        width: 90%;
    }
}

@media only screen and (max-width: 568px) {
    #left {
        flex-direction: column;
    }

    #dashboard {
        flex-direction: column;
    }
}
</style>