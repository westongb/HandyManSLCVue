<template>
    <div class="navBar">
          <Header/>
  <b-navbar class="navBar" toggleable="lg"  bg-variant="#a82200">
    <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <b-nav-item class="linkText" href="/">Home</b-nav-item>
        <b-nav-item class="linkText" href="/Services">Services</b-nav-item>
        <b-nav-item class="linkText" href="/meetBrett" >Your Handyman</b-nav-item>
      </b-navbar-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

     
<!-- Using 'button-content' slot -->
        <!-- <b-nav-item-dropdown right>
          
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

import Header from "./Header";

export default {
     name: "NavBar",
    components :{
            Header
    }
}
</script>

<style scoped>
.navBar{
    background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
    z-index: 2;
}

.linkText{
  color: rgb(26, 42, 42);
  font-weight: bold;
}


</style>