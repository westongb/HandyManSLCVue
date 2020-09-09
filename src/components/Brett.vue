<template>
    <div>
        <!-- <h1 class="brettTitle">Meet Your Handy Man</h1> -->
          <div class="underline"></div>
        <br/>
    <div class="brettSection">
        <div class="brettDescription">
            <div class="brettText">
        <h2>Brett White</h2>
        <div class="underline"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
             est laborum.
             <br/>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
             est laborum.
             </p>
            </div>
        <img class="brettImage" :src="image"/>
        </div>
    </div>
    </div>
</template>

<script>

import brettImage from "../assets/Handyman Brett.jpg"

export default {
    data:function (){
        return{
            image: brettImage,
            services: []
        }
    },
    mounted:
    
    function getServices (){
        fetch(`http://localhost:5000/services`, {
            method: "GET",
                 }
        ).then(res=> 
    {console.log(res.data)
    },
    (error) =>{
    console.log(error);
    });
    }
    }

</script>

<style>

.brettSection{
    width: 100%;
    background-color: wheat;
    margin-top: -25px;
    padding-top: 50px;
    padding-bottom: 100px;

}
.brettTitle{
    background-color: lightslategray;
    padding-bottom: 20px;
    padding-top: 20px;
    padding-bottom: 0px;
      z-index: 2;

}

.brettImage{
    height: 500px;
    margin-left: 20px;
      z-index: 2;
}

.brettDescription{
    display: flex;
    width: 60%;
    margin-left: 20%;
    z-index: 2;
    
   
}

.brettText{
    margin-top: 100px;
      z-index: 2;
}

.underline{
    background-color: black;
    height: 2px;
}

@media only screen and (max-width: 1080px)
{
    .brettDescription{
        display: inline;
        
    }
}

@media only screen and (max-width: 780px)
{
.brettImage{
    height: 300px;
}
}

</style>