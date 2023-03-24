<template>
  <div>
    <Carousel
        :carousels="carousels"
        :autoplay="{
          
          disableOnInteraction: false,
        }"
    />
  </div>
</template>

<script>
  import Carousel from "@/components/Carousel.vue";
  import couple2 from "@/assets/img/couple2.png";
  import donor from "@/assets/img/donor.png";
  import couple from "@/assets/img/couple.png";
  
  
  export default {
    components: {
      Carousel,
    },
    data() {
      return {
        carousels: [
          {
            img: couple2,
            title: "Egg Donor",
            description:"One of our core service is to make sure we have the best of egg donors available to provide an unfiltered service to our client"
          },
          {
            img: couple,
            title: "Surrogate Mother",
            description:"One of our core service is to make sure we have the best of egg donors available to provide an unfiltered service to our client"

          },
          {
            img: donor,
            title: "Sperm Donor",
            description:"One of our core service is to make sure we have the best of egg donors available to provide an unfiltered service to our client"

          },
          
        ],
  
        
      };
    },
  };
  </script>
  <style lang=""></style>
  
  