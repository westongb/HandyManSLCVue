<template>
    <div>
        <!-- <h1 class="brettTitle">Meet Your Handy Man</h1> -->
          <div class="underline"></div>
        <br/>
    <div class="brettSection">
        <div class="brettDescription">
            <div class="brettText">
        <h2>Meet Brett White</h2>
        <div class="underline"></div>
        <div class="textSection one">
        <img class="brettImage" :src="waterTower"/>
        <p>Many years ago I was driving by a golf course and my family noticed that their small water tower had fallen to the ground. It had been painted like a massive golf ball on a tee, 
            and it looked quite forlorn as it lay there. My 5-year old daughter was sad, but then she quickly smiled as she knew the solution to the problem. “It’s OK, daddy will fix it!”. 
  <br><br>
Obviously she had become accustomed to watching her father build and fix things around the house.  She had become confident in my abilities as I remodeled our houses and solved the myriad of 
problems that come with home ownership. And I can assure you that having owned 8+ homes myself (from brand new to 75 years old) I have received a great education on what is needed to keep a
 house running properly.
<br><br>

</p>
        </div>
<div class="textSection two">

<p>My motto is “DON’T LIVE WITH IT, FIX IT!” It is silly that we all tend to let things go in our homes until we have family coming over, the big party, the leak becomes a flood, the grass is 
now dead or we decide to sell the house. You should enjoy your home at its best all the time you live there. I think that is something we all deserve.
<br><br>
I can’t do everything, but I can do most things. If you want it done right, then I’m your guy. I always show up on the day and time you schedule. The work will be completed to your satisfaction. And mine too.
Look around at the website to get an idea of what is possible.
 <br><br>
Give me a call, a text, an email. Let’s see how I can fix it.</p>
<img class="brettImage" :src="image"/>
        </div>
<Offer/>
            
            </div>
       
        </div>
    </div>
    </div>
</template>

<script>

import brettImage from "../assets/Handyman Brett.jpg";
import waterTower from "../assets/golf ball water tower.jpg";
import Offer from "./offer";


export default {
    data:function (){
        return{
            image: brettImage,
            waterTower: waterTower,
            services: []
        }
    },
    components:{
        Offer: Offer
    }
    ,
    // mounted:
    
    // function getServices (){
    //     fetch(`http://localhost:5000/services`, {
    //         method: "GET",
    //              }
    //     ).then(res=> 
    // {console.log(res.data)
    // },
    // (error) =>{
    // console.log(error);
    // });
    // }
    }

</script>

<style>

.brettSection{
    width: 100%;
    background-color: #C3AD98;
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
    height: 400px;
    width: 300px;
    margin: auto;
    object-fit: cover;
}

.brettDescription{
    display: block;
    width: 60%;
    margin-left: 20%;
    z-index: 2;
    
   
}

.brettText{
    margin-top: 100px;
      z-index: 2;
}

.brettText h2{
    font-size: 350%;
}

.underline{
    background-color: black;
    height: 2px;
}

.textSection{
    display: flex;
    margin: 1% 0 1% 0;
}

.two{
     margin-left: -5%;
}

p{
    text-align: left;
    font-size: 120%;
    margin: 0 5% 0 5%;
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

.brettDescription{
    margin: auto;
}


.textSection{
    flex-direction: column;
}

.two{
    flex-direction: column-reverse;
    margin: auto;
}
}
</style>