<template>
   <div >

        <div class="catagoryButtons">
            <button class="serviceCatagory" v-on:click="search= 'Electrical' " >Electrical</button>
            <button class="serviceCatagory" v-on:click="search= 'Furniture' ">Furniture</button>
            <button class="serviceCatagory" v-on:click="search= 'Interior' ">Interior</button>
             <button class="serviceCatagory" v-on:click="search= 'Landscaping' ">Landscaping</button>
            <button class="serviceCatagory" v-on:click="search= 'Odd Jobs' ">Odd Jobs</button>
            <button class="serviceCatagory" v-on:click="search= 'Plumbing' ">Plumbing</button>

            <!-- add dropdown for mobile -->
      
        </div>
          <div>
            <b-form-select v-model="search" :options="options" size="lg" class="mt-3" ></b-form-select>
        </div>
<!-- 
    map service lists based on search -->
        <div
        v-for="service in filterServices"
        :key="service.ServiceType"
        class="serviceTypeList"
        >
            
            <h2 class="serviceName">{{service.ServiceName}}</h2>
             <p>{{service.ServiceDescription}}</p>
             <a href="/quote"><b-button variant="success" >Get A Quote</b-button></a>
    </div>


   </div>
</template>


<script>

import {serverUri} from '../../const';

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
            queryString: `serviceType=Electrical`,
            options: [
          { value: null, text: 'Please select an option' },
          { value: 'Electrical', text: 'Electrical' },
          { value: 'Furniture', text: 'Furniture' },
         { value: 'Interior', text: 'Interior' },
        { value: 'Landscaping', text: 'Landscaping' },
         { value: 'Odd Jobs', text: 'Odd Jobs' },
          { value: 'Plumbing', text: 'Plumbing' },
        ]
        }
    },

    components:{
       
    },

    props: {
        searchType: String
    },

     mounted:
    
    function getServices (){
        fetch(`${serverUri}/api/Servicelist`, {
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
    background-color: #cc9463 ;
    color: #2337a7;
  
}

.serviceTypeList p{
      font-weight: 500;
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
    background-color: #2d43c0;
    color: white;
    font-size: 20px;
    
}
.serviceName{
    text-decoration: underline;
}

.mt-3{
      visibility:hidden
}

@media only screen and (max-width: 800px) {

.catagoryButtons{
    display: none;
}

.mt-3{
    visibility: visible;
    width: 500px;
   
    padding: 5px 5px 5px 5px;
    background-color: #2d43c0;
    color: white;
}

}

@media only screen and (max-width: 650px) {
.mt-3{
   width: 300px;
}
}
@media only screen and (max-width: 450px) {
.mt-3{
   width: 200px;
}

}



</style>