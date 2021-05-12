<template>
    <div :key="service.id" v-for="service in services" class="service">
        <h1>{{ service.name }}</h1>
        <h5>{{ service.description }}</h5>
        <h5>Average Cost: {{service.cost_average}}</h5>
    </div>
    <div>
        <MoreInfo/>
    </div>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">

</template>

<script>
import MoreInfo from '../components/MoreInfo.vue'

export default {
    name: 'Services',
  components: {
    MoreInfo
  },
    data(){
        return {
            services: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/services')
            .then (response => response.json())
            .then(data => this.services = data)
            .catch(err => console.log(err.message))
    },
    }
    
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}
h1{
    color:black;
    padding:10px;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size:23.5px;
    margin-top:-30px;
    margin-bottom:10px;
    
}
h5{
  font-size:20px;
  font-weight: 400;
  text-align:left;  
}
.service {
width:200px;
height:220px;
padding:30px;
margin:12px;
margin-top:100px;
display:inline-block;
font-family: 'Open Sans Condensed', sans-serif;
border:7px solid #b4cbd994;
vertical-align: middle;
}


</style>