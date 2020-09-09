<template>
<div class="services">
  <div class="hello">
    <!-- <img src="../assets/HMCollage" /> -->
    <h2>Services</h2>
    <div></div>
 

  <Electrical/>
  
  </div>
  
</div>
</template>

<script>


import Electrical from './services/Electrical';
import {uriBase} from '../const';

export default {
  name: 'Services',
     components: {
          // AddServices,
          Electrical
       },
 data:function (){
        return{
         
            services: [],
            serviceList: null,
            serviceType: "",
            serviceDescription: "",
            serviceName: "",
            serviceTime: "",
            servicePrice: "",
            serviceImg: "",
        }
 },
   method: function postService (){
        fetch(`${uriBase}/api/postservices`, {
          method: "Post",
          body: JSON.stringify(
            {
         "serviceType": this.serviceType,
        "serviceName": this.serviceName,
        "job_time": this.serviceTime,
        "price": this.servicePrice,
        "description": this.serviceDescription,
        "img": this.serviceImg

            }
          )
        }).then (res => console.log("service created" +res))
   }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
.services{
  width: 100%;
  padding-left: 15%;
}

.serviceDescription{
  display: flex;
  flex-direction: column;
}



.hello{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;
 

}

</style>
