<template>
    <div class="headerBar">
        <div>
         
            <ul class="headerGroup">
                   <div>
                <a href="\"><img class="logo" src="@/assets/Handyman logo finished.png"/></a>
            </div>
                <li >
                    <button  class="headerList"><a href="tel:+1-801-643-6574">
                        <img class="iconImage" src="https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-3/24/5046-512.png"/>
                        <div class="textBox">
                        <h4 class="headerText detail" >801-643-6574</h4>
                        <h4 class="headerText detail two">Give me a call or text</h4>
                       
                    </div>
                    </a>
                    </button>
                </li>
                 <li >
                     
                    <button class="headerList">
                        
                        <a  href="\quote">
                        <!-- <img class="iconImage" src="https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-3/24/5046-512.png"/> -->
                        <b-icon icon="calendar" class="h1 mb-1"></b-icon>
                        <div class="textBox">
                        <h4 class="headerText detail" >Get A Quote</h4>
                        <h4 class="headerText detail two">Tell me what you need!</h4>
                       
                    </div>
                        </a>
                    </button>
                </li>
                 <li >
                    <button href="#" class="headerList">
                        <a href = "mailto: MyHandyManBrett@gmail.com">
                        <b-icon icon="envelope" class="h1 mb-2"></b-icon>
                        <div class="textBox">
                        <h4 class="headerText detail">MyHandyManBrett@gmail</h4>
                        <h4 class="headerText detail two">Send me an email</h4>
                  
                    </div>
                        </a>
                    </button>
                </li>
                  <li></li>
                   <li></li>
            </ul>


         </div>  
    </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import getQuote from "./Getquote"

Vue.use(BootstrapVueIcons)

export default {
    name: "Header",   

    component:{
        getQuote
    },

}
</script>

<style>
.headerBar{
    z-index: 3;
    position: sticky;
    top: 0;
    margin-top: -50px;
}

.headerGroup{
    display: flex;
    background-image: url("../assets/abstract-antique-backdrop-background.jpg");
    padding-top: 20px;
    width: 100%;
    padding-bottom: -10px;
    margin-bottom: 0px;
    justify-content: space-around; 
    z-index: 2;
    list-style-type: none;
}

.iconImage{
    height: 50px;
    width: 50px;
 
}

.headerList a{
    width: 110%;
    margin-left: 4%;
}

.headerList{
    display: flex;
    height: 100px;
    border-width: .002em;
    border: solid  #3f3f3f;
    padding: 2px;
   background-color: rgb(202, 152, 82, .7);
    align-items: center;
    justify-self: center;
  
    border-radius: 10px;
    }

.headerList:hover{
    background-color: #2d43c0;
     background-image: url();
}

.headerList:hover .headerText{
    color: #CA9852;
}

.textBox{
    margin-right: 0px;
}

.headerText{
    color: #3f3f3f;
    font-size: .8em;
    margin: 3% 10% 0% 0%;
    
}

.logo{
    width: 250px;
    margin-top: -20px;
}

.calenderIcon{
    height: 30px;

}

.detail{
    font-weight: 700;
    text-align: center;
    text-decoration: none;
}

.two{
    
    margin-left: 5%;
}

@media only screen and (max-width: 950px) {
.headerList{
    margin-right: 10px;
    width: 95%;
}

}


@media only screen and (max-width: 850px) {

.detail{
    /* display: none; */
}

.logo{
    width: 150px;
    margin-left: -20px;
     margin-top: 0px;
}

.headerList{
    margin-right: 10px;
    width: 90%;
}  
}


@media only screen and (max-width: 650px) {
.detail{
    display: none;
}

.headerList{
    width: 80%;
}

.headerGroup{
    width: 90%;
}




}

@media only screen and (max-width: 350px) {
.headerGroup{
    width: 90%;
}

.iconImage{
    height: 30px;
    width: 30px;
}
.headerList{
    background-color: rgb(195, 173, 152, .1);
    border: thin;
    margin-top: -45%;
}

.headerGroup{
    
}

}

</style>

