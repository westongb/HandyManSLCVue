<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    
      <!-- Text slides with image -->
      <b-carousel-slide
      
        
       class="carousel"
        
        :img-src="image1"
      >
      <h1>
        "Don't Live With it...Fix it!"
    </h1>
       <button> <a  href="\quote">Get a quote</a></button>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
        class="carousel"
       :img-src="image2"
        
       >
        <h1>
        "Don't Live With it...Fix it!"
    </h1>
   <button> <a  href="\quote">Get a quote</a></button>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
       class="carousel"
       :img-src="doorknob"
        
       >
       
        <h1>
        "Don't Live With it...Fix it!"
    </h1>
    <button> <a  href="\quote">Get a quote</a></button>
       </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide
     class="carousel"
     
       :img-src="image3" img-alt="Blank image">
           <h1>
        "Don't Live With it...Fix it!"
    </h1>
        <button> <a  href="\quote">Get a quote</a></button>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide
    class="carousel"
      
       :img-src="image4" img-alt="Blank image">
        <h1>
        "Don't Live With it...Fix it!"
    </h1>
     <button> <a  href="\quote">Get a quote</a></button>
      </b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>

  import toolsImage1 from "../assets/neonbrand-SiYxQRATT2M-unsplash2.jpg"
  import toolsImage2 from "../assets/person-holding-pencil-1388944.jpg"
  import toolsImage3 from "../assets/grinderCompressed.jpg"
  import toolsImage4 from "../assets/Webp.net-compress-image (2) (1).jpg"

import toolsImage5 from "../assets/annie-gray-WEWTGkPUVT0-unsplash.jpg"

  export default {
    data() {
      return {
        publicPath: process.env.BASE_URL,
        slide: 0,
        sliding: null,
        image1: toolsImage1,
        image2: toolsImage2,
        doorknob: toolsImage5,
        image3: toolsImage3,
        image4: toolsImage4
      }
    },
    // methods: {
    //   onSlideStart(slide) {
    //     this.sliding = true
    //   },
    //   onSlideEnd(slide) {
    //     this.sliding = false
    //   }
    // }
  }
</script>

<style>
#firstSlide{
    height: 400px;
}

h1{
  height: 100px;
  font-size: 150%;
  color: black;
  margin-bottom: 100px;
  border-radius: 50px;
  background-color: rgb(158, 149, 149, .01);
}

.carousel{
  height: 500px;
  justify-content: center;
  font-size: 200%;
  
}

button{
  border-radius: 20px;
  background-color: rgb(146, 107, 53, .7);
}

a{
  color: black;
}

a:hover{
  color: #62443A ;
}

@media only screen and (max-width: 950px) {
 .carousel{
    height: 400px;
  }
}

@media only screen and (max-width: 650px) {
  .carousel{
    height: 300px;
  }
}

@media only screen and (max-width: 450px) {
  .carousel{
    height: 200px;
  }
}

</style>