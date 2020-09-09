<template>


<div>
<!-- 
  <b-button  @click.once="getServices; $bvModal.show('ModalName')">Get A Quote</b-button>

  <b-modal id="ModalName" title="BootstrapVue" class="quoteModal" no-stacking> -->
  
     
<div class="quoteform">

    <h1>Get a Quote</h1>
  <form class="contact-form" @submit.prevent="submit">
    <label>Name</label>

     <b-form-input v-model="form.from_name" placeholder="Enter your name"  name="from_name"  
     
     ></b-form-input>

    <br/>
    <label>Email</label>

    <b-form-input :type="email" v-model="form.reply_to" placeholder="Enter your Email"  name="reply_to"  
          ></b-form-input>
          <br/>
    <label>Phone number</label>
    <b-form-input :type="phone" v-model="form.phone_number" placeholder="Best number to reach you at"  name="phoneNumber"  
     
     ></b-form-input>
    <!-- <input type="email" 
    name="reply_to"
    v-model="form.reply_to"
     class="input"
    > -->
    <br/>
    <label>Service Type</label>
    <b-form-select v-model="form.serviceType"   :options="serviceTypeList"  ></b-form-select>
   
     <br/>
       <label>Service Type</label>
   <b-form-select v-model="form.serviceDetailed"  @input="filterServices"     >
    <b-form-select-option-group v-for="service in filterServices" :key="service.ServiceName">
    <b-form-select-option :value="service.ServiceName">{{service.ServiceName}}</b-form-select-option>
        </b-form-select-option-group>
   </b-form-select>
   
     <br/>
     <div class="textArea">
    <label class="textAreaLabel">Message</label>
    <b-form-textarea name="message"
    v-model="form.message"
    class="messageLabel"
    rows="4"
    ></b-form-textarea>
     <br/>
      <b-button @click="submit" value="Send" block variant="success">Submit Quote Request</b-button>
   
     </div>
  </form>




  
</div>
 <!-- </b-modal> -->
</div>
</template>

<script>
// import emailjs from 'emailjs-com';
import emailjs from 'emailjs-com';
import {uriBase} from '../const';



export default {

    props: 'ModalName',

     data() {
      return {
        services:[],
        serviceTypeList: ["Electrical", "Landscaping", "Interior", "Plumbing"],
       
     
        form: {
            to: 'westongb@gmail.com',
             Subject: "Trial Email",
             from_name: "",
             phone_number: "",
              serviceType: "",
            reply_to: "",
             serviceDetailed: "",
            message: "",
            to_name:"",
            html: `<h2>  and  </h2>`,
            
        },
      
        }},




    beforemounted:{
        function(){
      emailjs.init(" user_MATCgaEeoHw119UWC9Txw").then(this.getServices());
   }},
   
   mounted: 
   
       function getServices(){
        fetch(`${uriBase}/api/Servicelist`, {
            method: "GET",
                 }
        ).then(res=> res.json()).then(res => this.services= res)
      
   },




  methods: {

     submit ()  {
        //  var   template_params= {
        // "reply_to": this.email,
        // "name": this.name,
        // "to_name": "to_name_value",
        // "html": this.html
        //     }
      
        event.preventDefault()
        console.log(this.form.phone_number)
        emailjs.send('gmail', 'template_RZenTIyl', {reply_from : this.form.reply_to, html: this.form.message, from_name: this.form.from_name, service_Type: this.form.serviceType, service_detail: this.form.serviceDetailed, phone_Number: this.form.phone_number }, 'user_MATCgaEeoHw119UWC9Txw')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }},
    computed:
    {   filterServices () {
    return this.services.filter((service) => {
        return service.ServiceType.match(this.form.serviceType);
    })
    }}
  }
 

   




</script>

<style scoped>

.quoteform{
    width: 90%;
    height: 600px;
    margin: auto;
    background-color: wheat;
}

.messageLabel{
    width: 300px;
}
.input{
    width: 300px;
    margin-left: 23px;
}

.textAreaLabel{
    margin-top: -50px;
}

.textArea{
    height: 300px;
}

.messageLabel{
    width: 100%;
}

</style>