<template>
  <div class="mb-20" :class="AboutUs">
  <div class=" md:w-[80%] lg:mt-[10%] w-[80%] sm:w-[95%] mx-auto mt-[5%] mx-auto grid md:grid-cols-2 sm:grid-cols-5 md:gap-48 gap-10">
    <img src="../../assets/img/whoweare.png" class=" sm:min-h-md  md:min-h-lg sm:col-span-2 md:col-span-1">
    <div class=" sm:col-span-3 md:col-span-1 ">
        <h2 class=" md:text-start ">Who we are and what we stand for</h2>
        <p class="mt-[5%] text-start font-normal text-sm sm:text-base lg:text-lg ">
            We offer a well-rounded support service to any ART related services including but not limited to Donor and Surrogate recruitment services, Database management for donors and surrogates, Patient services, Counselling and Consultancy.We provide individualized care and attention for every patient during their journey to parenthood.

            <br>
            <br>
            Whether you are becoming a parent through surrogacy or with the help of one of our egg donors, we have developed a surrogacy program that provides you the security, we can also recommend legal servicesand matching process to successfully complete your journey as seamlessly as possible.

        </p>
        <Button buttonClass=" w-full md:w-[100%] sm:w-[50%] py-3 mx-auto mt-[10%]"/>
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