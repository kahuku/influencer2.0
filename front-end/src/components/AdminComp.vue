<!-- Uploading function has issues- doesn't display the image -->

<template>
<div id="container">
    <div id="add-container">
        <div class="heading">
            <h2>Add a Post</h2>
        </div>
        <div class="add-post">
            <div class="form">
              <input v-model="title" placeholder="Title" class="input-area">
              <input v-model="platform" placeholder="Platform" class="input-area">
              <input v-model="likes" placeholder="Likes" class="input-area">
              <input v-model="comments" placeholder="Comments" class="input-area">
              <input v-model="earnings" placeholder="Earnings" class="input-area">
              <p></p>
              <input type="file" name="photo" @change="fileChanged">
              <button @click="upload">Upload</button>
            </div>
            <div class="upload" v-if="addPost">
                <img :src="addPost.path" />
            </div>
        </div>
    </div>

    <div id="edit-container">
      <div class="heading">
        <h2>Edit/Delete a Post</h2>
      </div>
      <div class="edit-post">
        <div class="form horiz">
          <div class="edit-section">
            <input v-model="findTitle" placeholder="Search">
            <div class="suggestions" v-if="suggestions.length > 0">
              <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">
                {{s.title}}
              </div>
            </div>
          </div>
          <div class="edit-section">
            <div class="upload" v-if="findPost">
              <div class="row">
                <h3 class="inline-label">Title:</h3>
                <input v-model="findPost.title" class="input-area">
              </div>
              <div class="row">
                <h3 class="inline-label">Platform:</h3>
                <input v-model="findPost.platform" class="input-area">
              </div>
              <div class="row">
                <h3 class="inline-label">Likes:</h3>
                <input v-model="findPost.likes" class="input-area">
              </div>
              <div class="row">
                <h3 class="inline-label">Comments:</h3>
                <input v-model="findPost.comments" class="input-area">
              </div>
              <div class="row">
                <h3 class="inline-label">Earnings:</h3>
                <input v-model="findPost.earnings" class="input-area">
              </div>
            </div>
          </div>
          <div class="edit-section" v-if="findPost">
            <img :src="findPost.path" />
          </div>
          <div class="edit-section">
            <div class="actions" v-if="findPost">
              <button @click="editPost(findPost)" class="button">Edit</button>
              <button @click="deletePost(findPost)" class="button">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="add-sponsor-container">
        <div class="heading">
          <h2>Add a Sponsor</h2>
        </div>
        <div class="add-sponsor">
            <div class="form">
              <input v-model="sponsor" placeholder="Company" class="input-area">
              <input v-model="value" placeholder="Value" class="input-area">
              <p></p>
              <button @click="addSponsor">Add</button>
            </div>
        </div>
    </div>

    <div id="edit-sponsor-container">
      <div class="heading">
        <h2>Edit/Delete a Sponsor</h2>
      </div>
      <div id="edit-sponsor">
        <div class="form horiz">
          <div class="edit-section">
            <input v-model="findSponsorName" placeholder="Search">
            <div class="suggestions" v-if="sponsorSuggestions.length > 0">
              <div class="suggestion" v-for="ss in sponsorSuggestions" :key="ss.id" @click="selectSponsor(ss)">
                {{ss.company}}
              </div>
            </div>
          </div>
          <div class="edit-section">
            <div class="upload" v-if="findSponsor">
              <div class="row-sponsor">
                <h3 class="inline-label">Sponsor:</h3>
                <input v-model="findSponsor.company" class="input-area">
              </div>
              <div class="row-sponsor">
                <h3 class="inline-label">Value:</h3>
                <input v-model="findSponsor.value" class="input-area">
              </div>
            </div>
          </div>
          <div class="edit-section">
            <div class="actions" v-if="findSponsor">
              <button @click="editSponsor(findSponsor)" class="button">Edit</button>
              <button @click="deleteSponsor(findSponsor)" class="button">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="add-affiliate-container">
        <div class="heading">
          <h2>Add an Affiliate Product</h2>
        </div>
        <div class="add-affiliate">
          <div class="form">
            <input v-model="product" placeholder="Product" class="input-area">
            <input v-model="affiliateEarnings" placeholder="Earnings" class="input-area">
            <p></p>
            <button @click="addAffiliate">Add</button>
          </div>
        </div>
    </div>

    <div id="edit-affiliate-container">
      <div class="heading">
        <h2>Edit/Delete an Affiliate Product</h2>
      </div>
      <div id="edit-affiliate">
        <div class="form horiz">
          <div class="edit-section">
            <input v-model="findProduct" placeholder="Search">
            <div class="suggestions" v-if="affiliateSuggestions.length > 0">
              <div class="suggestion" v-for="aS in affiliateSuggestions" :key="aS.id" @click="selectAffiliate(aS)">
                {{aS.product}}
              </div>
            </div>
          </div>
          <div class="edit-section">
            <div class="upload" v-if="findAffiliate">
              <div class="row-affiliate">
                <h3 class="inline-label">Product:</h3>
                <input v-model="findAffiliate.product" class="input-area">
              </div>
              <div class="row-affiliate">
                <h3 class="inline-label">Earnings:</h3>
                <input v-model="findAffiliate.earnings" class="input-area">
              </div>
            </div>
          </div>
          <div class="edit-section">
            <div class="actions" v-if="findAffiliate">
              <button @click="editAffiliate(findAffiliate)" class="button">Edit</button>
              <button @click="deleteAffiliate(findAffiliate)" class="button">Delete</button>
            </div>
          </div> 
        </div>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AdminComp',
    data() {
        return {
            file: null,
            likes: "",
            comments: "",
            items: [],
            platform: "",
            addPost: null,
            findTitle: "",
            title: "",
            findPost: null,
            earnings: "",
            sponsor: "",
            value: "",
            findSponsorName: "",
            sponsors: [],
            findSponsor: null,
            affiliateEarnings: "",
            product: "",
            findAffiliate: null,
            findProduct: "",
            affiliates: []
        }
    },
    created() {
      this.getPosts();
      this.getSponsors();
      this.getAffiliate();
    },
    computed: {
      suggestions() {
        console.log("In suggestions");
        let items = this.items.filter(item => item.title.toLowerCase().includes(this.findTitle.toLowerCase()));
        return items.sort((a, b) => a.title > b.title);
      },
      sponsorSuggestions() {
        console.log("In suggestionsSponsor");
        let sponsors = this.sponsors.filter(sponsor => sponsor.company.toLowerCase().includes(this.findSponsorName.toLowerCase()));
        return sponsors.sort((a, b) => a.company > b.company);
      },
      affiliateSuggestions() {
        console.log("In affiliateSuggestions");
        let affiliates = this.affiliates.filter(affiliate => affiliate.product.toLowerCase().includes(this.findProduct.toLowerCase()));
        return affiliates.sort((a, b) => a.product > b.product);
      }
    },
    methods: {
        fileChanged(event) {
            this.file = event.target.files[0]
        },
        async upload() {
            try {
                const formData = new FormData();
                formData.append('photo', this.file, this.file.name)
                let r1 = await axios.post('/api/photos', formData);
                let r2 = await axios.post('/api/posts', {
                    likes: this.likes,
                    path: r1.data.path,
                    comments: this.comments,
                    earnings: this.earnings,
                    platform: this.platform,
                    title: this.title,
                });
                console.log(r2.data);
                this.addPost = r2.data;
            } catch (error) {
                console.log(error);
            }
        },
        async addSponsor() {
          try {
            await axios.post('/api/sponsors', {
              company: this.sponsor,
              value: this.value
            });
          }
          catch (error) {
            console.log(error);
          }
        },
        async addAffiliate() {
          try {
            await axios.post('/api/affiliate', {
              product: this.product,
              earnings: this.affiliateEarnings
            });
          }
          catch (error) {
            console.log(error);
          }
        },
        async getPosts() {
            try {
                let response = await axios.get("/api/posts");
                this.items = response.data;
                return true;
            } 
            catch (error) {
                console.log(error);
            }
        },
        async getSponsors() {
            try {
                let response = await axios.get("/api/sponsors");
                this.sponsors = response.data;
                return true;
            } 
            catch (error) {
                console.log(error);
            }
        },
        async getAffiliate() {
          try {
            let response = await axios.get("/api/affiliate");
            this.affiliates = response.data;
            return true;
          }
          catch (error) {
            console.log(error);
          }
        },
        selectItem(post) {
          this.findTitle = post.title;
          this.findPost = post;
        },
        selectSponsor(sponsor) {
          this.findSponsorName = sponsor.company;
          this.findSponsor = sponsor;
        },
        selectAffiliate(affiliate) {
          this.findProduct = affiliate.product;
          this.findAffiliate = affiliate;
        },
        async deletePost(post) {
          try {
            await axios.delete("/api/posts/" + post._id);
            this.findPost = null;
            this.getPosts();
            return true;
          } catch (error) {
            console.log(error);
          }
        },
        async editPost(post) {
          try {
            await axios.put("/api/posts/" + post._id, {
              likes: this.findPost.likes,
              path: this.findPost.path,
              comments: this.findPost.comments,
              earnings: this.findPost.earnings,
              platform: this.findPost.platform,
              title: this.findPost.title,
            });
            this.findPost = null;
            this.getPosts();
            return true;
          } catch (error) {
            console.log(error);
          }
        },
        async deleteSponsor(sponsor) {
          try {
            await axios.delete("/api/sponsors/" + sponsor._id);
            this.findSponsor = null;
            this.getSponsors();
            return true;
          } catch (error) {
            console.log(error);
          }
        },
        async editSponsor(sponsor) {
          try {
            await axios.put("/api/sponsors/" + sponsor._id, {
              company: this.findSponsor.company,
              value: this.findSponsor.value
            });
            this.findSponsor = null;
            this.getSponsors();
            return true;
          } catch (error) {
            console.log(error);
          }
        },
        async deleteAffiliate(affiliate) {
          try {
            await axios.delete("/api/affiliate/" + affiliate._id);
            this.findAffiliate = null;
            this.getAffiliate();
          }
          catch (error) {
            console.log(error);
          }
        },
        async editAffiliate(affiliate) {
          try {
            await axios.put("/api/affiliate/" + affiliate._id, {
              product: this.findAffiliate.product,
              earnings: this.findAffiliate.earnings
            });
            this.findAffiliate = null;
            this.getAffiliate();
          }
          catch (error) {
            console.log(error);
          }
        }
    }
}
</script>

<style scoped>
#container {
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    color: black;
}

#add-container {
    /* border: 2px solid blue; */
    margin: 20px;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

#edit-container {
  margin: 20px;
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

#add-sponsor-container {
    /* border: 2px solid blue; */
    margin: 20px;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

#add-affiliate-container {
    /* border: 2px solid blue; */
    margin: 20px;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

#edit-sponsor-container {
  margin: 20px;
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

#edit-affiliate-container {
  margin: 20px;
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add-post,
.edit, .add-sponsor, .add-affiliate {
  display: flex;
}

.edit-post,
.edit, .edit-sponsor {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  height: fit-content;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 200px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
  background-color: white;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

.input-area {
  display: block;
  margin: 5px;
}

.button {
  margin: 5px;
}

.edit-post, .edit-sponsor, .edit-affiliate {
  display: flex;
  flex-direction: row;
  /* border: 2px solid red; */
}

.horiz {
  display: flex;
  flex-direction: row;
  /* border: 2px solid blue; */
}

.edit-section {
  margin: 20px;
}

.edit-section img {
  max-width: 200px;
}

.inline-label {
  display: inline;
}

.row {
  display: flex;
  flex-direction: row;
  /* border: 2px solid red; */
  align-items: center;
  justify-content: space-between;
}

.row-sponsor, .row-affiliate {
  display: flex;
  flex-direction: row;
  /* border: 2px solid red; */
  align-items: center;
  justify-content: space-between;
}

.row h3, .row-sponsor h3, .row-affiliate h3 {
  margin: 0px;
}
</style>