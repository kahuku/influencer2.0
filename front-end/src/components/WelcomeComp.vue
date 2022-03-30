<template>
<div class="wrapper">
    <p>Hello there, and welcome to ɪɴғʟᴜᴇɴᴄᴇʀ, the premier social media platform accelerator!</p>
    <p>
        ɪɴғʟᴜᴇɴᴄᴇʀ uses Machine Learning along with quantitative and qualitative forms of data 
        analysis to help you reach a larger audience on social media, gain a following, and establish
        your internet personality.
    </p>
    <p>
        Check out the 
        <router-link to="/feeds" class="navlink inline">Feeds</router-link>
        page to see your latest posts across all platforms.
    </p>
    <p>
        The 
        <router-link to="/analytics" class="navlink inline">Analytics</router-link>
        page is a dashboard for all the numbers and statistics of your social media influence.
    </p>
    <p>
        Finally, go to 
        <router-link to="/income" class="navlink inline">Income</router-link>
        to see the revenue you've made from affiliate marketing, sponsorships, and creator funds!
    </p>
    <p>
        We hope you enjoy using ɪɴғʟᴜᴇɴᴄᴇʀ. If there's anything our staff can do to 
        assist you in developing a social media presence, reach out to us with the 
        contact information found below.
    </p>
</div>
</template>

<script>
export default {
    name: 'WelcomeComp'
}
</script>

<style scoped>
.wrapper {
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin: 15px;
  color: black;
  align-items: center;
  flex-direction: column;
}

.wrapper p {
    width: 75%;
    justify-self: center;
}

.inline {
    padding: 0px;
    text-decoration: none;
    font-weight: bolder;
}
</style>