<template>
    <footer>
        <p>{{footerText}}</p>
    </footer>
</template>

<script>
export default {
    data(){
        return {
            footerText: "Copyright anno 2021"
        }
    }
}
</script>

<style scoped>
footer {
    background-color:#B4CBD9;
    padding:10px;
    text-align:center;
    height:50px;
}
p{
    background-color:#B4CBD9;
}
</style>