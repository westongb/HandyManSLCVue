<template>
    <div class="Reviews">
        <h1 class="title">Reviews</h1>
        <div class="reviewsTable">
            <div class="Table">
                <div class="reviews">
                    <div class="review one">
                    <div class="review-title" ><h3>Review 1</h3></div>
                     <div><img class="reviewImage" :src="person1"/></div>
                    
                    <div class="reviewText">If you haven't seen Game of Thrones, go watch it right now. If you have 
                        then you'll totally get why this Hodor themed lorem ipsum generator is 
                        just brilliant.</div>
                    </div> 
                    <div class="review two">
                          <div class="review-title"><h3>Review 2</h3></div>
                        <div><img class="reviewImage" :src="person2"/></div>
                   
                    <div class="reviewText">If you haven't seen Game of Thrones, go watch it right now. If you have 
                        then you'll totally get why this Hodor themed lorem ipsum generator is 
                        just brilliant.</div>
                    </div>

                    <div class="review three">
                        <div class="review-title"><h3>Review 3</h3></div>
                         <div><img class="reviewImage" :src="person3"/></div>
                    <div class="reviewText">If you haven't seen Game of Thrones, go watch it right now. If you have 
                        then you'll totally get why this Hodor themed lorem ipsum generator is 
                        just brilliant.</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

import person1 from "../assets/robert-godwin-cdksyTqEXzo-unsplash.jpg";
import person2 from "../assets/nickolas-nikolic-iwV1-SWB4n8-unsplash.jpg";
import person3 from "../assets/fred-kearney-o-ioeoATbIM-unsplash.jpg";


export default {
    name: "Reviews",
    data: function () {

    return{
        person1: person1,
        person2: person2,
        person3: person3
    }}
}
</script>

<style scoped>

.reviewImage{
    height: 200px;
    width: 250px;
    object-fit: cover;
}

.reviews{
     display: flex;
    margin-top: 50px;
    margin-bottom: 100px;
    z-index: 2;
}

.Table{
    margin-right: 10%;
    margin-left: 10%;
}

.review{
    width: 30%;
    margin: 0px 10px 10px;
    justify-content: center;
}

.reviewText{
    width: 300px;
    margin: auto;
}

.title{
    font-size: 500%;
}

@media only screen and (min-width: 1250px) {
    .reviewText{
    width: 250px;
    margin: auto;
}

}

@media only screen and (max-width: 1080px) {
    .reviewText{
    width: 200px;
    margin: auto;
}

.review-title{
   width: 300px;
   margin-left: 0px;
}

}

@media only screen and (max-width: 900px) {
  .reviews{
      flex-direction: column;
     margin: 0px 150px 0px 0px;
      align-items: center;
  }

  .reviewImage{
    height: 300px;
    width: 300px;
    object-fit: cover;
}

.reviewText{
    width: 300px;
    margin: auto;
}


}

@media only screen and (max-width: 650px) {
  .reviews{
      flex-direction: column;
     margin: 0px 150px 0px 0px;
      align-items: center;
  }

  .reviewImage{
    height: 200px;
    width: 200px;
    object-fit: cover;
}

.reviewText{
    width: 250px;
    margin-left: -20px;
   
}

.review-title{
   width: 250px;
   margin-left: -20px;
}



}
</style>