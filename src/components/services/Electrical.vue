<template>
   <div >

        <div class="catagoryButtons">
            <button class="serviceCatagory" v-on:click="search= 'Electrical' " >Electrical</button>
            <button class="serviceCatagory" v-on:click="search= 'Furniture' ">Furniture</button>
            <button class="serviceCatagory" v-on:click="search= 'Interior' ">Interior</button>
             <button class="serviceCatagory" v-on:click="search= 'Landscaping' ">Landscaping</button>
            <button class="serviceCatagory" v-on:click="search= 'Odd Jobs' ">Odd Jobs</button>
            <button class="serviceCatagory" v-on:click="search= 'Plumbing' ">Plumbing</button>

        </div>

        <!-- <h2 v-for="(service) in this.services"
        :key="service.index"
        ></h2> -->

        <div
        v-for="service in filterServices"
        :key="service.ServiceType"
        class="serviceTypeList"
        >
            
            <h2 class="serviceName">{{service.ServiceName}}</h2>
             <p>{{service.ServiceDescription}}</p>
             <a href="/quote"><b-button variant="success" >Get A Quote</b-button></a>
    </div>
<!-- 
        <ul v-for="service in services" :key="service">
            <li>{{service}}</li>

        </ul> -->

   </div>
</template>


<script>

import {uriBase} from '../../const';

export default {
    
     data:function (){
        return{
            
            search:"Electrical",
            services: [],
            serviceList: "",
            serviceType: "Electrical",
            serviceDescription: "",
            serviceName: "",
            serviceTime: "",
            servicePrice: "",
            serviceImg: "",
            queryString: `serviceType=Electrical`
        }
    },

    components:{
       
    },

     mounted:
    
    function getServices (){
        fetch(`${uriBase}/api/Servicelist`, {
            method: "GET",
                 }
        ).then(res=> res.json()).then(res => this.services= res)
    },

    computed:
    {
    filterServices: function () {
    return this.services.filter((service) => {
        return service.ServiceType.match(this.search);
    })
    }

            
    }
}
</script>



<style scoped>
    
.serviceTypeList{
    border: solid;
    border-color: black;
    margin-bottom: 20px;
    border-radius: 15px;
}

.catagoryButtons{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

.serviceCatagory{
    border-radius: 10px;
    width: 18%;
    height: 60px;
    margin-bottom: 20px;
    background-color: brown;
    color: wheat;
    font-size: 20px;
    
}
.serviceName{
    text-decoration: underline;
}


</style>