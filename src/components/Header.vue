<template>
    <div class="headerBar">
        <div>
         
            <ul class="headerGroup">
                   <div>
                <img class="logo" src="@/assets/154-1547479_handyman-logos-for-business-cards-download-handyman.png"/>
            </div>
                <li >
                    <button  class="headerList"><a href="tel:+1-801-643-6574">
                        <img class="iconImage" src="https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-3/24/5046-512.png"/>
                        <div>
                        <h4 class="headerText detail" >801-643-6574</h4>
                        <h4 class="headerText detail">Give me a call or send a text</h4>
                       
                    </div>
                    </a>
                    </button>
                </li>
                 <li >
                     
                    <button class="headerList">
                        
                        <a  href="\quote">
                        <!-- <img class="iconImage" src="https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-3/24/5046-512.png"/> -->
                        <b-icon icon="calendar" class="h1 mb-2"></b-icon>
                        <div>
                        <h4 class="headerText">Get A Quote</h4>
                        <h4 class="headerText detail">Let me know what you need!</h4>
                       
                    </div>
                        </a>
                    </button>
                </li>
                 <li >
                    <button href="#" class="headerList">
                        <a href = "mailto: abc@example.com">
                        <b-icon icon="envelope" class="h1 mb-2"></b-icon>
                        <div>
                        <h4 class="headerText detail">brettEmail@email.com</h4>
                        <h4 class="headerText detail">Send me and email</h4>
                  
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
    background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
    padding-top: 20px;
    width: 100%;
    padding-bottom: -10px;
    margin-bottom: 0px;
    justify-content: space-around; 
    z-index: 2;
    list-style-type: none;
}

.iconImage{
    height: 40px;
    width: 40px;
}
.headerList{
    display: flex;
    height: 80px;
    border-width: .002em;
    border: solid  darkslategray;
    padding: 2px;
    padding-right: 6px;
    background-color: wheat;
    align-items: center;
    justify-self: center;
    border-radius: 10px;
    }

.headerList:hover{
    background-color: brown;
     background-image: url();
}

.headerList:hover .headerText{
    color: wheat;
}

.headerText{
    color: darkslategray;
    font-size: .8em;
    margin-left: 5px;
}

.logo{
    width: 200px;
}

.calenderIcon{
    height: 30px;

}

@media only screen and (max-width: 800px) {

.detail{
    /* display: none; */
}

.logo{
    width: 150px;
    margin-left: -20px;
}

.headerList{
    margin-right: 10px;
}  
}


@media only screen and (max-width: 650px) {
.detail{
    display: none;
}
}
</style>

