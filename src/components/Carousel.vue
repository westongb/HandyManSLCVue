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
        class="firstSlide"
        caption="First slide"
        style="height: 500px; "
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        :img-src="image1"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
        style="height: 500px;"
       :img-src="image2">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        style="height: 500px; "
       :img-src="doorknob"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide
       style="height: 500px"
       caption="Blank Image" 
       :img-src="image3" img-alt="Blank image">
          
       
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide
        style="height: 500px"
       caption="Blank Image" 
       :img-src="image4" img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
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



</style>