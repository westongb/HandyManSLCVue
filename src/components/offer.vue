<template>
<div>
     <a href="/quote">
     <button>
        <h1 class="offerText"> “DON’T LIVE WITH IT, FIX IT!”</h1>
        <h2 class="offerText">Get a Quote Today </h2>
     </button>
        </a>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
button{
  
    display: flex;
    flex-direction: column;
    height: 200px;
    padding-top: 20px;
    margin: 0% 0 5% 0;
    width: 100%;
    justify-content: center;
    color: white;
    background-color: #2d43c0;
    box-shadow: 5px 5px #2d43c0;
    
}

button:hover{
    box-shadow: 0px 0px;
    margin: 5px 0 4.8% 0;
    padding-top: -5px;
}

.offerText{
    margin: auto;
}
</style>