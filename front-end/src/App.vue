<template>
  <div id="app">
    <nav>
      <div>
        <h2 class="purple">ɪɴғʟᴜᴇɴᴄᴇʀ</h2>
      </div>
      <div class="nav-links">
        <router-link to="/" class="navlink">Home</router-link>
        <router-link to="/feeds" class="navlink">Feeds</router-link>
        <router-link to="/analytics" class="navlink">Analytics</router-link>
        <router-link to="/income" class="navlink">Income</router-link>
        <router-link to="/admin" class="navlink">Admin</router-link>
      </div>
    </nav>
    <router-view/>

    <div id="footer">
      <div class="foot-col">
        <a href="https://www.instagram.com/wilsonator02/" target="_blank">Instagram</a>
        <a href="https://www.snapchat.com/add/wilsonator02?share_id=RDQ3RUQ5&locale=en_US" target="_blank">Snapchat</a>
        <a href="https://www.linkedin.com/in/drewwilson2002/" target="_blank">LinkedIn</a>
      </div>
      <div class="foot-seperator"></div>
      <div class="foot-col">
        <a href="https://github.com/kahuku" target="_blank">My Github Account</a>
        <a href="https://github.com/kahuku/influencer" target="_blank">This project's Github Repo</a>
        <p>
          Contact me: <a href="mailto:aw053102@byu.edu">aw053102@byu.edu</a>
        </p>
      </div>
      <div class="foot-seperator"></div>
      <div class="foot-col">
        <p>
          Creted by Drew Wilson for a project in BYU's CS 260 class in Winter semester of 2022. The purpose
          of this project was to learn and demonstrate proficiency in the Vue.js CLI.
        </p>
        <p>
          Part 2 of the project included making a back end with Node, an API with Express, and a Mongo db.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0px;
  background-color: #D5D5D5;
}

#app {
  font-family: 'Titillium Web', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  flex-direction: row;
  padding: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: space-between;
  font-size: 1.25em;
  background-color: #313131;
}

.nav-links {
  display: flex;
  flex-direction: row;
  justify-content: right;
}

.navlink {
  padding: 15px;
  padding-left: 50px;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #9856c8;
  text-decoration: none;
}

.purple {
  color: #9856c8;
  margin: 5px;
}

#footer {
  background-color: #9856c8;
  min-height: fit-content;
  color: black;
  display: flex;
  flex-direction: row;
}

.foot-col {
  display: flex;
  width: 30%;
  margin: 1%;
  height: 75%;
  align-self: center;
  justify-content: flex-start;
  flex-direction: column;
}

.foot-seperator {
  display: flex;
  border-left: 1px solid #444;
  height: 150px;
  align-self: center;
}

.foot-col a {
  text-decoration: none;
  color: black;
}

@media only screen and (max-width: 768px){
  #footer {
    flex-direction: column;
    margin: 0px;
    padding: 0px;
  }

  .foot-seperator {
    border: none;
    height: 0px;
  }
}
</style>
