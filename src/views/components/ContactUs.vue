<template>
  <div class="contact md:h-screen sm:flex md:gap-20 sm:gap-10 " :class="Contact">
    <div class=" pt-40 pl-20 bg-[#E8DEF8] md:w-[50%] ">
        <img src="../../assets/img/undraw_doctors_p6aq 1.png">
    </div>

    
    <div class=" w-[70%] sm:w-[50%]  mx-auto flex relative">
        <div class="my-10 ">
            <h2 class="md:text-start ">Have something to say?</h2>
            <h2 class="md:text-start text-xl pt-5 font-normal text[#625B71]">Reach out to us via this form.</h2>

            <form class="" action="submit" >
              <div  class="mt-3 grid gap-x-8 gap-y-4 md:gap-y-6 grid-cols-1 sm:grid-cols-1 sm:grid-cols-2">
                <Input Label="First Name *"/>
                <Input  Label="Last Name *"/>
                <Input Label=" Job title *"/>
                <Input Label="Phone number *"/>
              </div>
              <div class="grid sm:grid-cols-2 md:grid-cols-2 gap-2">
                <Input class="md:mt-6 mt-3 " Label="Work email *"/>
              <Input class="md:mt-6 mt-3" Label="Company name *"/>
              </div>

             
              <Button buttonClass="md:mt-6 mt-4 " msg="Submit"/>

              
            </form>
            <p class="md:text-start text-base  py-6 font-normal text-[#625B71] ">
              By submitting this form, you consent to our 
              <a href="http://" target="_blank" rel="noopener noreferrer" class="underline text-[#21005D] hover:text-[#6750A4] text-sm ">Terms and Conditions.</a>
            
          </p>
            

        </div>
      <img src="../../assets/img/question.png " class="absolute ml-96"> 
    </div>
  </div>
</template>

<script>
import Button from '../../components/Button.vue'
import Input from '../../components/Input.vue'
export default {
    components:{Button, Input},    
}
</script>

<style>

</style>