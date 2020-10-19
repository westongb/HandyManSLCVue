<template>
    <div class="service">
        <h1>Types of Service Offered</h1>
        <b-container class="justify-content-md-center" fluid >
            <b-row class="serviceCatagory" >
                <b-col class="serviceType1" md="auto" ><a href="/Services" searchType="Electrical"><div class="serviceText"><h4>Electrical</h4><p class="serviceDesc">Lighting, appliances and outlets</p></div></a></b-col>
                <b-col class="serviceType2" md="auto"><a href="/Services"><div class="serviceText"><h4>Interior</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                <b-col class="serviceType3" md="auto"><a href="/Services"><div class="serviceText"><h4>Landscaping</h4><p class="serviceDesc">Have a "Model Home" yard.</p></div></a></b-col>
                <b-col class="serviceType4" md="auto" ><a href="/Services"><div class="serviceText"><h4>Furnature</h4><p class="serviceDesc">Let us put together your new furniture</p></div></a></b-col>
                <b-col class="serviceType5" md="auto"><a href="/Services"><div class="serviceText"><h4>Plumbing</h4><p class="serviceDesc plumb">Got issues with your pipes? We got you covered.</p></div></a></b-col>
                <b-col class="serviceType6" md="auto"><a href="/Services"><div class="serviceText"><h4>Odd Jobs</h4><p class="serviceDesc">Everything else. Let us help.</p></div></a></b-col>
            </b-row>
        </b-container>
    </div>
</template>



<script>

require ("../assets/rsz_handyman_brett.jpg");
import serviceImage from "../assets/handtools5.jpg"



export default {
    name: "ServiceCatagory",
     data:function (){
        return{
            // image: brettImage,
            serviceImage,
        }
}
}
</script>

<style>




.serviceType1 {
    background-image: url("../assets/HM light fixture repair.jpg");
    background-size:cover;
  background-repeat: no-repeat;
   background-size: 200%;
   background-position: center;
    height: 230px;
    border-radius: 205px;
    margin: 1%;
    width: 13vw;
    align-items: center;
       border: solid black;
    border-width: thin;
}

.serviceType1:hover {
 background-image: url("../assets/abstract-antique-backdrop-background.jpg");
 background-size: auto;
 background-position: top;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType1:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}


.serviceType2 {
    background-image: url("../assets/HM Ikea furnature assembly 2.jpg");
      background-position: center;
    background-size: cover;
  background-repeat: no-repeat;
     background-size: 200%;
    height: 230px;
    border-radius: 205px;
    margin: 1%;
    width: 13vw;
    align-items: center;
    border: solid black;
    border-width: thin;
}

.serviceType2:hover {
    background-image: url("../assets/abstract-antique-backdrop-background.jpg");
    background-size: auto;
    background-position: top;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType2:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}


.serviceType3 {
    background-image: url("../assets/HM leaf raking.jpg");
 background-position: center;
 
  background-repeat: no-repeat;
    background-size: 200%;
     height: 230px;
    border-radius: 205px;
    margin: 1%;
    width: 13vw;
    align-items: center;
 border: solid black;
border-width: thin;
}

.serviceType3:hover {
    background-image: url("../assets/abstract-antique-backdrop-background.jpg");
 /* background-image: url(); */
 background-size: auto;
 background-position: top;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType3:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}

.serviceType4 {
    background-image: url("../assets/HMdoor repair.jpg");
        background-position: center;
    background-size: cover;
  background-repeat: no-repeat;
      background-size: 200%;
    height: 230px;
    border-radius: 205px;
    margin: 1%;
    width: 13vw;
    align-items: center;
 border: solid black;
    border-width: thin;
}

.serviceType4:hover {
    background-image: url("../assets/abstract-antique-backdrop-background.jpg");
 /* background-image: url(); */
 background-position: top;
 background-size: auto;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType4:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}

.serviceType5 {
    background-image: url("../assets/HM Garbage Disposal Repair.jpg");
    
  background-repeat: no-repeat;
    background-size: 150%;
    height: 230px;
    border-radius: 205px;
    margin: 1%;
    width: 13vw;
    align-items: center;
 border: solid black;
    border-width: thin;
}

.serviceType5:hover {
    background-image: url("../assets/abstract-antique-backdrop-background.jpg");
 /* background-image: url(); */
 background-size: auto;
 background-position: top;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType5:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}

.serviceType6 {
    background-image: url("../assets/HM towel rack.jpg");
      background-position: center;
      background-size: 150%;
  background-repeat: no-repeat;
  
    height: 230px;
    border-radius: 205px;
    margin: 1%;
    width: 13vw;
    align-items: center;
     border: solid black;
     border-width: thin;
}

.serviceType6:hover {
    background-image: url("../assets/abstract-antique-backdrop-background.jpg");
 /* background-image: url(); */
 background-size: auto;
 background-position: top;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType6:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}

.service{
    width: 100%;
    margin: auto;
}

.service h1{
    margin-bottom: 3%;
    margin-left: -10%;
}

.serviceText{
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 85%;
    margin-top: 5%;
    justify-content: center;
    align-items: center;
    color: #2d43c0;
    opacity: 0;
     position: absolute;
   
      text-shadow:2px 2px 10px white;
      font-weight: 900;
      
}

h4{
    font-size: 130%;
    text-decoration: underline;
    
}

.serviceDesc{
    font-size: 120%;
    text-align: center;
}

.plumb{
    font-size: 100%;
}

@media only screen and (max-width: 1550px){


.serviceType2 {
   background-size: 200%;
}

.serviceType3 {
      background-size: 200%;
}

.serviceType4 {
    background-size: 200%;
}


.serviceType5 {
   background-size: 200%;  
}


.serviceType6 {
     background-size: 200%;
}
}

@media only screen and (max-width: 1250px){

.serviceText{
    margin-top: 10%;
    text-align: center;
}

.serviceDesc{
    text-align: center;
      font-size: 90%;
}

.plumb{
    font-size: 80%;
}

.serviceType2 {
   background-size: 250%;
}

.serviceType3 {
     background-size: 250%;
}

.serviceType4 {
    background-size: 250%;
}


.serviceType5 {
  background-size: 250%; 
}


.serviceType6 {
    background-size: 250%;
}
}

@media only screen and (max-width: 1000px){

.service{
    margin: auto;
}

.serviceType1 {
    border-radius: 50px;
    width: 400px;
background-size: 100%;
background-position: bottom;

}

.serviceType2 {
 border-radius: 50px;
    width: 400px;
    background-size: 100%;
}

.serviceType3 {
 border-radius: 50px;
    width: 400px;
    background-size: 100%;
}

.serviceType4 {
 border-radius: 50px;
    width: 400px;
    background-size: 100%;
}

.serviceType5 {
 border-radius: 50px;
    width: 400px;
    background-size: 100%;
}
.serviceType6 {
 border-radius: 50px;
    width: 400px;
    background-size: 100%;
}

}

@media only screen and (max-width: 400px){

.service{
    margin: auto;
}

.serviceType1 {
   
background-size: 200%;
}

.serviceType2 {
background-size: 200%;
}

.serviceType3 {
background-size: 200%;
}

.serviceType4 {
background-size: 200%;
}

.serviceType5 {
background-size: 200%;
}
.serviceType6 {
background-size: 200%;
}

}

</style>