<template>
    <div :key="service.id" v-for="service in services" class="service">
        <h1>{{ service.name }}</h1>
        <h5>{{ service.description }}</h5>
        <h5>Average Cost: {{service.cost_average}}</h5>
    </div>
    <div>
        <MoreInfo/>
    </div>
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

<style>
h1{
    color:black;
    padding:15px;
}
.service {
width:200px;
height:300px;
padding:30px;
margin:20px;
margin-top:20px;
display:inline-block;
}

</style>