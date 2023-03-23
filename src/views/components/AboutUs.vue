<template>
  <div class="" :class="AboutUs">
  <div class="justify-between md:w-[75%] w-[95%] gap-x-24 mt-[5%] mx-auto aboutUs md:flex">
       <img src="../../assets/img/family.png">
    <div class="md:w-[80%] mt-6">
        <h1 class=" md:text-start text-center text-[#1D192B] w-full md:w-[90%] text-xl md:text-4xl">Who we are and what we stand for</h1>
        <p class="mt-[5%] md:text-start text-center md:text-xl w-full md:w-[80%]">
            The state of the nation welfare rests solely on us as we 
            acts as the intermediary between a donor and a patient. 
            The purpose of the patient portal is to create a platform 
            on the database where patients can access a variety of 
            donors that possibly fits their profile for egg donation.
            <br>
            <br>
            The state of the nation welfare rests solely on us as we 
            acts as the intermediary between a donor and a patient. 
            The purpose of the patient portal is to create a platform 
            on the database where patients can access a variety of 
            donors that possibly fits their profile for egg donation.
        </p>
        <Button class="w-[100%] mx-auto mt-[10%]"/>
    </div>
   </div>
  </div>
  
</template>

<script>
import Button from '../../components/Button.vue'
export default {
    components:{Button},    
}

</script>

<style>
 body {
    background-color: white;
 }
</style>