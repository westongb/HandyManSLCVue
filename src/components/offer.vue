<template>
<div>
     <a href="/quote">
     <button>
        
        <h1 class="offerText">GET A FREE QUOTE TODAY!! </h1>
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
    height: 150px;
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
    font-size: 250%;
}
</style>