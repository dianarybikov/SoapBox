<template>
    <footer>
        <p>{{footerText}}</p>
    </footer>
</template>

<script>
export default {
    data(){
        return {
            footerText: "Soap Box"
        }
    }
}
</script>

<style scoped>
footer {
    background-color:#b4cbd994;
    padding:10px;
    text-align:center;
    height:50px;
}

</style>