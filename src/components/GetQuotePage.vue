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
    margin-top: 50px;
    padding: 20px;
    background-color: wheat;
    padding-bottom: 100px;
}
</style>