<template>
    <div  class=" w-[75%] mx-auto" >
      <div class="" v-for="(card, i ) in cardDetails " :key="i">
        <Card :cardBg ="`${card.bg}`"
        :numberClass="`${card.border}`"
        :textColor="`${card.textColor}`"
        :headerColor="`${card.textColor}`"
        :number =card.number
        :header=card.header
        :text= card.text
        
      />
      </div>
    </div>
</template>

<script>
import Card from '../../components/Card.vue'

export default {
 components: {Card},
 data() {
    return {
      cardDetails: [
       
        
        { 
          number: '1', 
          header:'Register',
          text: "Register to get access to our exclusive end-to-end platform to meet the diverse needs of your desired purpose",
          bg: "bg-[#EADDFF] md:float-left",
          border: "border-t-[#6750A4]"
        },
        { 
          number: '2', 
          header:'Access',
          text: "Access the portal you paid for. The level of access determine the paid amount. For example - 24 hours access, 48 hours access, 72 hours access, 1 week access etc. to a maximum of 20 donor access to all categories",
          bg: "bg-[#F9DEDC] md:float-right ",
          border: "border-r-[#6750A4]"
        },
        { 
          number: '3', 
          header:'Search',
          text: "Search for donors with all available parameters (view the pictures both passport and portrait). Should be able to see the profile and cycle outcomesThe donor profile should include: Age, height, weight, state of origin, complexion, blood group, blood genotype, education, number of children if any, infectious screening.",
          bg: "bg-[#6750A4] clear-left md:float-left",
          border: "border-b-[#6750A4] ",
          textColor: "text-white",
          headerColor: "text-white"
        },
        { 
          number: '4', 
          header:'Send a Request',
          text: "Send a request to the Admin to have access to the requested donor. ",
          bg: "bg-[#EFB8C8]  md:float-right clear-right",
          border: "border-l-[#6750A4]"
        },
        
        

        
      ]
    }
  },
}
 
</script>

<style>

</style>