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
       img-src="https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            style="height: 500px; object-fit: cover;"
            src="https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide
        style="height: 500px"
       caption="Blank Image" img-src="https://images.pexels.com/photos/1571736/pexels-photo-1571736.jpeg" img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>

  import toolsImage1 from "../assets/neonbrand-SiYxQRATT2M-unsplash.jpg"
  import toolsImage2 from "../assets/person-holding-pencil-1388944.jpg"

  export default {
    data() {
      return {
        publicPath: process.env.BASE_URL,
        slide: 0,
        sliding: null,
        image1: toolsImage1,
        image2: toolsImage2
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