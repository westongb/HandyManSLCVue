<template>

    <div class="site">
          <!-- <div class="sitebackground"></div>   -->
        <Carousel/>
         
    <div class="offer">
        <Offer/>
    </div> 
    <div class="sectionSpace"></div>
    <div class="services">
        <ServiceCatagory/>
    </div>
    <div id="trial">
        <h1>{{product}}</h1>
    </div>
    <div class="handyman">
        <p class="handymanText">My motto is “DON’T LIVE WITH IT, FIX IT!” It is silly that we all tend to let things go in our homes until we have family coming over, the big party, the leak becomes a flood, the grass is 
            now dead or we decide to sell the house. You should enjoy your home at its best all the time you live there. I think that is something we all deserve. <a class="brettLink" href="./meetBrett">...more</a></p>
        <img class="brettImage" :src="brettImage"/>
    </div>
    <div class="reviewDiv">
        <Reviews/>
    </div>
    <div class="quote" id="Getquote">
        <div>

   <GetQuote style="width: 160%; margin-left: -25%;"/>
</div>
      
    </div>
    <div class="footer">

    </div>
    </div>


</template>

<script>
// import HandyMan from "./Brett"
import Carousel from "./Carousel";
import ServiceCatagory from "./ServiceCatagory";
import Reviews from "./Reviews";
import GetQuote from "./Getquote";
import brettImage from "../assets/rsz_handyman_brett.jpg"
import Offer from "./offer";

export default {
    name: "Home",
    components: {
        Carousel,
        ServiceCatagory,
        // HandyMan,
        Reviews,
        GetQuote,
        Offer
    },
    data(){
        return{
            brettImage: brettImage,
            product: ''
        }
    }
}



</script>

<style scoped>


.brettLink:hover{
    color: #001ec5;
}

.sectionSpace{
    height: 20px;
}

.brettImage{
    height: 55vh;
    margin-right: 20%;
 margin-top: 2%;
}

.services{
    width: 100%;
     align-content: center;
     margin-left: 3%;
     margin-right: 3%;
    
}

/* .sitebackground{
    top: 0;
    left: 0;
    width: 100%;
    height: 1200px;
    position: absolute;
    background-color: rgba(245, 244, 244, 0.5);
  
} */

.footer{
     background-image: url("../assets/abstract-antique-backdrop-background.jpg");
     height: 100px;
}

.quote{
    width: 70%;
    height: 800px;
    border: solid black;
    display: flex;
    justify-content: center;
    margin: auto;
   
    background-image: url("../assets/abstract-antique-backdrop-background.jpg");
}

.handyman{
    display: flex;
    justify-content: center;
    margin-top: 10%;
    margin-bottom: 10%;
    padding-bottom: 5%;
   background-color: #513918;
}


.handymanText{
    width: 40%;
    font-size: 200%;
    margin-top: 5%;
    color: white;
    margin-left: 15%;
}


.reviewDiv{
    display: none;
}



@media screen and (max-width: 1250px) {
.quote{
    width: 70%;
}

.brettImage{
    margin-top: 10%;
    margin-right: 5%;
}

.handymanText{

margin-left: 10%;
}

}

@media screen and (max-width: 850px) {


.handyman{
    flex-direction: column-reverse;
}    

.handymanText{
    font-size: 170%;
    width: 85%;
}

.brettImage{
    margin:auto;
    
}

.services{
    margin-left: 20%;
    width: 80%;
}

.quote{
    width: 80%;
}

.reviewDiv{
    margin-bottom: 7%;
}

}
@media screen and (max-width: 750px) {

.handymanText{
    font-size: 150%;
}

.brettImage{
    margin-top: 8%;
}

}

@media (max-width: 650px) {
.services{
    margin-left: 10%;
}

.quote{
    width: 60%;
    margin-left: 18%;
}

}


@media (max-width: 450px) {

.brettImage{
    height: 45vh;
    width: 60vw;
}


}

</style>