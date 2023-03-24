<template>
  <div class="mb-20" :class="AboutUs">
  <div class=" md:w-[80%] w-[95%]  mt-[5%] mx-auto grid md:grid-cols-2 md:gap-48 gap-10">
    <img src="../../assets/img/family.png" class=" min-h-lg">
    <div class=" ">
        <h2 class=" md:text-start">Who we are and what we stand for</h2>
        <p class="mt-[5%] text-start font-normal text-sm ">
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
        <Button buttonClass="w-[100%] mx-auto mt-[10%]"/>
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

</style>