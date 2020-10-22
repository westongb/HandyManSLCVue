<template>
<div class="getQuote">
    <getQuote/>
</div>
</template>

<script>
import getQuote from "./Getquote";


export default {
    name: "GetQuotePage",

    components:{
        getQuote
    }

}
</script>

<style scoped>
.getQuote{
    
    padding: 20px;
    background-image: url("../assets/abstract-antique-backdrop-background.jpg");
    padding-bottom: 100px;
}
</style>