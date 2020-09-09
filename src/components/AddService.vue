<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Service Type:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.serviceType"
          type="text"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Service Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.serviceName"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Description:" label-for="input-3">
    <b-form-input
          id="input-3"
          v-model="form.serviceDescription"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Expected Time">
        <b-form-input
          id="input-4"
          v-model="form.serviceTime"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

            <b-form-group id="input-group-4" label="Price">
        <b-form-input
          id="input-4"
          v-model="form.servicePrice"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {uriBase} from '../const';


  export default {
       name: 'AddServices',
    
    data() {
      return {
        form: {
            serviceType: "",
            serviceDescription: "",
            serviceName: "",
            serviceTime: "",
            servicePrice: "",
            serviceImg: "",
        },
        
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.postService(this.form)
      },
        postService (){
        fetch(`${uriBase}/api/postservices`, {
          method: "Post",
          body: JSON.stringify(
            {
         "serviceType": this.form.serviceType,
        "serviceName": this.form.serviceName,
        "job_time": this.form.serviceTime,
        "price": this.form.servicePrice,
        "description": this.form.serviceDescription,
        "img": this.form.serviceImg


            }
          )
        }).then (res => console.log("service created" +res))
   },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>