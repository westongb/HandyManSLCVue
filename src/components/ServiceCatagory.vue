<template>
    <div class="service">
        <h1>Types of Service Offered</h1>
        <b-container class="justify-content-md-center" fluid >
            <b-row class="serviceCatagory" >
                <b-col class="serviceType1" md="auto" ><a href="/Services"><div class="serviceText"><h4>Electrical</h4><p class="serviceDesc">Lighting, appliances and outlets</p></div></a></b-col>
                <b-col class="serviceType2" md="auto"><a href="/Services"><div class="serviceText"><h4>Interior</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                <b-col class="serviceType3" md="auto"><a href="/Services"><div class="serviceText"><h4>Landscaping</h4><p class="serviceDesc">Get your yard looking the way you want</p></div></a></b-col>
                 <b-col class="serviceType4" md="auto" ><a href="/Services"><div class="serviceText"><h4>Furnature</h4><p class="serviceDesc">Let us put together your new furnature</p></div></a></b-col>
                <b-col class="serviceType5" md="auto"><a href="/Services"><div class="serviceText"><h4>Plumbing</h4><p class="serviceDesc">Got issues with your pipes. We can do that.</p></div></a></b-col>
                <b-col class="serviceType6" md="auto"><a href="/Services"><div class="serviceText"><h4>Odd Jobs</h4><p class="serviceDesc">Not sure how to describe your issue? Let us help.</p></div></a></b-col>
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
            serviceImage: serviceImage,
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
    height: 200px;
    border-radius: 100px;
    margin: 1%;
    width: 200px;
    align-items: center;
    
}

.serviceType1:hover {
 background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
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
    height: 200px;
    border-radius: 205px;
      margin: 1%;
    width: 200px;
    align-items: center;
    
}

.serviceType2:hover {
    background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
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
    height: 200px;
    border-radius: 205px;
      margin: 1%;
    width: 200px;
    align-items: center;

    
}

.serviceType3:hover {
    background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
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
    height: 200px;
    border-radius: 205px;
       margin: 1%;
    width: 200px;
    align-items: center;

    
}

.serviceType4:hover {
    background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
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
    height: 200px;
    border-radius: 205px;
     margin: 1%;
    width: 200px;
    align-items: center;

    
}

.serviceType5:hover {
    background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
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
  
    height: 200px;
    border-radius: 205px;
     margin: 1%;
    width: 200px;
    align-items: center;

    
}

.serviceType6:hover {
    background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
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
    width: 90%;
    margin: 0% 5% 0% 5%;
}

.serviceText{
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 85%;
 
    justify-content: center;
    align-items: center;
    color: brown;
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
    font-size: 100%;
}

@media only screen and (max-width: 880px){

.serviceType1 {
    border-radius: 50px;
    width: 400px;

}

.serviceType2 {
 border-radius: 50px;
    width: 400px;
}

.serviceType3 {
 border-radius: 50px;
    width: 400px;
}

.serviceType4 {
 border-radius: 50px;
    width: 400px;
}

.serviceType5 {
 border-radius: 50px;
    width: 400px;
}
.serviceType6 {
 border-radius: 50px;
    width: 400px;
}

}

</style>