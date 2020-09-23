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
     
    >
    
      <!-- Text slides with image -->
      <b-carousel-slide
      
        
       class="carousel"
        
        :img-src="image1"
      >
      <div class="textBackground">
      <h1>
        "Don't Live With it...Fix it!"
    </h1>
      <h4>Get a quote today and watch your 'fix it list' disappear. </h4>
      </div>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
        class="carousel"
       :img-src="image2"
        
       >
       <div class="textBackground">
        <h1>
        "Don't wait till you find time. Let us take care of it."
    </h1>
        <h4>Dad has enouph things to do. We can take care of your around the house repairs. </h4>
       </div>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
       class="carousel"
       :img-src="doorknob"
        
       >
       <div class="textBackground">
        <h1>
        Make your home look the way you want it to be!
    </h1>
  <h4>Do you look at your home and see what it could be? Let us make it happen. </h4>
       </div>
       </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide
     class="carousel"
     
       :img-src="image3" img-alt="Blank image">
       <div class="textBackground">
           <h1>
        "Got a problem? There's a tool for that!"
    </h1>
     <h4>We have the tools and know how to fix all your household needs. </h4>
       </div>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide
    class="carousel"
      
       :img-src="image4" img-alt="Blank image">
       <div class="textBackground">
        <h1>
        "Make your yard the envy of the neighborhood!"
    </h1>
     <h4>Mow, cut, prune, you name it and we will take care of it.  </h4>
       </div>
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

.carousel h1{
 
  font-size: 450%;
  color:#101518;
  margin-bottom: 5%;
    -webkit-text-stroke: 2px black;
}

.carousel h4{
  font-size: 200%;
  color: #101518;
}

.carousel{
  height: 500px;
  justify-content: center;
  
  
}

.textBackground{
 background-color: rgb(158, 149, 149, .5);
 margin-bottom: 5%;
 border-radius: 50px;
}

button{
  border-radius: 20px;
  height: 50px;
  width: 200px;
  background-color: rgb(146, 107, 53, .7);
  
}

a{
  color: black;
  font-weight: 400;
}

a:hover{
  color: #62443A ;
}

@media only screen and (max-width: 950px) {
 .carousel{
    height: 400px;
  }

  .carousel h1{
 
  font-size: 350%;
 
}

.carousel h4{
  font-size: 150%;

}

}
@media only screen and (max-width: 650px) {
  .carousel{
    height: 300px;
  }


  .carousel h1{
 
  font-size: 250%;
}

.carousel h4{
  font-size: 100%;

}

}

@media only screen and (max-width: 450px) {
  .carousel{
    height: 200px;
  }

  .carousel h1{
 
  font-size: 150%;
}

.carousel h4{
  font-size: 80%;

}

}

</style>