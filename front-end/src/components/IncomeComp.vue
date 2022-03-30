<template>
<div id="container">
    <div id="left">
        <div id="total" class="lefthand">
            <h1 class="money">${{totalEarnings.toLocaleString("en-US")}}</h1>
            <h1>Total Earnings</h1>
        </div>
        <div id="post" class="lefthand">
            <h1 class="money">${{postEarnings.toLocaleString("en-US")}}</h1>
            <h1>Earnings from Posts</h1>
        </div>
    </div>
    <div id="dashboard">
        <div id="dash-top" class="dash-entry">
            <h1>Earnings by Platform</h1>
            <table class="table">
                <tr>
                    <th>Platform</th>
                    <th>Earnings</th>
                </tr>
                <tr>
                    <td>Snapchat</td>
                    <td>${{snapProfit.toLocaleString("en-US")}}</td>
                </tr>
                <tr>
                    <td>Instagram</td>
                    <td>${{instaProfit.toLocaleString("en-US")}}</td>
                </tr>
                <tr>
                    <td>TikTok</td>
                    <td>${{tikTokProfit.toLocaleString("en-US")}}</td>
                </tr>
                <tr>
                    <td>Twitter</td>
                    <td>${{twitterProfit.toLocaleString("en-US")}}</td>
                </tr>
                <tr style="font-weight: bold">
                    <td>Total</td>
                    <td>${{postEarnings.toLocaleString("en-US")}}</td>
                </tr>
            </table>
        </div>
        <div id="dash-middle" class="dash-entry">
            <h1>Earnings from Sponsorships</h1>
            <table class="table">
                <tr>
                    <th>Company</th>
                    <th>Contract Value</th>
                </tr>
                <tr v-for="sponsor in sponsors" :key="sponsor.id">
                    <td>{{sponsor.company}}</td>
                    <td>${{Number(sponsor.value).toLocaleString("en-US")}}</td>
                </tr>
                <tr style="font-weight: bold">
                    <td>Total</td>
                    <td>${{sponsorEarnings.toLocaleString("en-US")}}</td>
                </tr>
            </table>
        </div>
        <div id="dash-bottom" class="dash-entry">
            <h1>Earnings from Affiliate Marketing</h1>
            <table class="table">
                <tr>
                    <th>Product</th>
                    <th>Revenue</th>
                </tr>
                <tr v-for="ad in affiliate" :key="ad.id">
                    <td>{{ad.product}}</td>
                    <td>${{Number(ad.earnings).toLocaleString("en-US")}}</td>
                </tr>
                <tr style="font-weight: bold">
                    <td>Total</td>
                    <td>${{affiliateEarnings.toLocaleString("en-US")}}</td>
                </tr>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'IncomeComp',
    props: {
        sponsors: Array,
        affiliate: Array,
        posts: Array
    },
    computed: {
        postEarnings() {
            return this.snapProfit + this.instaProfit + this.tikTokProfit + this.twitterProfit
        },
        totalEarnings() {
            return this.postEarnings + this.sponsorEarnings + this.affiliateEarnings
        },
        snapPosts() {
            return this.posts.filter(post => post.platform === "Snapchat")
        },
        instaPosts() {
            return this.posts.filter(post => post.platform === "Instagram")
        },
        tikTokPosts() {
            return this.posts.filter(post => post.platform === "TikTok")
        },
        twitterPosts() {
            return this.posts.filter(post => post.platform === "Twitter")
        },
        snapProfit() {
            let sum = 0;
            for (let i = 0; i < this.snapPosts.length; i++){
                sum += Number(this.snapPosts[i].earnings);
            }
            return sum;
        },
        instaProfit() {
            let sum = 0;
            for (let i = 0; i < this.instaPosts.length; i++){
                sum += Number(this.instaPosts[i].earnings);
            }
            return sum;
        },
        tikTokProfit() {
            let sum = 0;
            for (let i = 0; i < this.tikTokPosts.length; i++){
                sum += Number(this.tikTokPosts[i].earnings);
            }
            return sum;
        },
        twitterProfit() {
            let sum = 0;
            for (let i = 0; i < this.twitterPosts.length; i++){
                sum += Number(this.twitterPosts[i].earnings);
            }
            return sum;
        },
        sponsorEarnings() {
            let sum = 0;
            for (let i = 0; i < this.sponsors.length; i++){
                sum += Number(this.sponsors[i].value);
            }
            return sum
        },
        affiliateEarnings() {
            let sum = 0;
            for (let i = 0; i < this.affiliate.length; i++){
                sum += Number(this.affiliate[i].earnings);
            }
            return sum
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

#dashboard {
  margin: 25px;
  margin-left: 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #BBB;
  min-height: 800px;
  min-width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lefthand {
  margin: 25px;
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #BBB;
  min-height: 300px;
  max-height: fit-content;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  color: black;
}

.money {
    color: green;
    font-weight: 900;
    font-size: 5em;
    margin: 0px;
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
}

.dash-entry {
    display: flex;
    min-height: 200px;
    width: 90%;
    margin: 25px;
    color: black;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    max-height: fit-content;
}

.dash-entry h1 {
    margin: 0px;
}

#dash-top {
    margin-top: 0px;
}

#dash-middle {
    /* border: 2px solid purple; */
}

#dash-bottom {
    /* border: 2px solid blue; */
}

.table {
    width: 100%;
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
        width: 85%;
    }
}
</style>