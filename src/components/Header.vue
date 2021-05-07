<template>
    <header>
        <h1 id="title">{{ title }}</h1>
        <router-link to="/" id="links" class="home-link">Home</router-link> 
        <router-link :to="{ name: 'Services' }" id="links">Services</router-link>
        <router-link :to="{ name: 'Booking' }" id="links">Booking Online</router-link>
        <router-link :to="{ name: 'About' }" id="links">About Us</router-link>
        <router-link :to="{ name: 'Contact' }" id="links">Contact Us</router-link>
    </header>
  <router-view/>
</template>

<script>
export default {
    data() {
       return {
           title: "Soap Box"
       } 
    },
}
</script>


<style>

header{
    display: flex;
    justify-content:center;
    height:110px;
    background-color:#B4CBD9;
}
#title{
    position:absolute;
    top:0%;
    left:3%;
}
#links{
    margin-left:40px;
    margin-top:5%;
    text-decoration: none;
    color:black;
    font-size:19px;
    font-weight:500;
}

</style>