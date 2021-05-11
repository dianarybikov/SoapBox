<template>
    <header>
        <h1 id="title">{{ title }}</h1>
        <router-link to="/" id="links" class="home-link">Home</router-link> 
        <router-link :to="{ name: 'Services' }" id="links">Services</router-link>
        <router-link :to="{ name: 'Booking' }" id="links">Booking Online</router-link>
        <router-link :to="{ name: 'About' }" id="links">About Us</router-link>
        <router-link :to="{ name: 'Contact' }" id="links">Contact Us</router-link>
        <button><a href="./booking-online">Get a Free Estimate</a></button>
    </header>
  <router-view/>
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">

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
    height:70px;
    background-color:#b4cbd994;
    
    
}
#title{
    position:absolute;
    top:-8%;
    left:3%;
    font-family: 'Open Sans Condensed', sans-serif;
}
#links{
    margin-left:40px;
    margin-top:2%;
    text-decoration: none;
    color:black;
    font-size:23px;
    font-weight:550;
    font-family: 'Open Sans Condensed', sans-serif;
}
button{
    position:absolute;
    left:85%;
    top:3%;
    background-color:rgba(255, 255, 255, 0.712);
    height:35px;
    width:130px;
    border:none;
    box-shadow: 1px 1px #6D7B8C;
    border-radius:15px;
    
}
button a {
    text-decoration:none;
    color:black;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size:18px;
    font-weight:600;
}
button:hover {
transform:translate3D(0, -1px,0) scale(1.20);
}

</style>