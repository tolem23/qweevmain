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
                description:"Choose from our range of intelligent pre-screened donors,depending on your specification. You can choose using any of our parameters ranging from age, complextion, genotype, height "
          },
          {
            img: couple,
            title: "Surrogate Mother",
              description:"Choose from our range of intelligent pre-screened donors,depending on your specification. You can choose using any of our parameters ranging from age, complextion, genotype, height "

          },
          {
            img: donor,
            title: "Sperm Donor",
            description:"One of our core service is to make sure we have the best of sperm donors available to meet your specifications"

          },
          
        ],
  
        
      };
    },
  };
  </script>
  <style lang=""></style>
  
  