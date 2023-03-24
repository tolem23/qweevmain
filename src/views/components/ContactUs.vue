<template>
  <div class="contact md:h-screen md:flex md:gap-20 incest-0" :class="Contact">
    <div class=" pt-40 pl-20 bg-[#E8DEF8] md:w-[50%] ">
        <img src="../../assets/img/undraw_doctors_p6aq 1.png">
    </div>

    
    <div class=" w-[80%] md:w-[50%]  mx-auto flex relative">
        <div class="py-10">
            <h2 class="md:text-start ">Have something to say?</h2>
            <h2 class="md:text-start text-xl pt-5 font-normal ">Reach out to us via this form.</h2>

            <form class="" action="submit" >
              <div  class="mt-3 grid gap-x-8 gap-y-4 md:gap-y-6 grid-cols-1 md:grid-cols-2">
                <Input Label="First Name *"/>
                <Input  Label="Last Name *"/>
                <Input Label=" Job title *"/>
                <Input Label="Phone number *"/>
              </div>
                 <Input class="md:mt-6 mt-3 " Label="Work email *"/>
              <Input class="md:mt-6 mt-3" Label="Company name *"/>
             
              <Button buttonClass="md:mt-6 mt-4 " msg="Submit"/>
            </form>
        </div>
      <img src="../../assets/img/question.png " class="absolute md:ml-96"> 
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