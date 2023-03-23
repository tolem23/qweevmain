<template>
  <div class="contact  md:flex" :class="Contact">
    <div class=" pt-[10%] bg-[#E8DEF8] md:w-[50%] md:h-[100vh]">
        <img src="../../assets/img/undraw_doctors_p6aq 1.png">
    </div>

    
    <div class=" pt-[5%] md:w-[50%]  pb-[10%] flex relative">
        <img class="w-20 mx-auto h-20" src="../../assets/img/question.png">
        <div class="absolute md:ml-[20%] ml-10 mr-10">
            <h1 class="font-semibold text-xl md:text-4xl">Have something to say?</h1>
            <p class="md:text-xl md:pt-[10%] pt-[5%] font-semibold">Reach out to us via this form.</p>

            <form class="" action="submit" >
              <div  class="mt-10 grid gap-x-8 gap-y-4 md:gap-y-6 grid-cols-1 md:grid-cols-2">
                <Input Label="First Name *"/>
                <Input  Label="Last Name *"/>
                <Input Label=" Job title *"/>
                <Input Label="Phone number *"/>
              </div>
              <Input class="md:mt-6 mt-4" Label="Work email *"/>
              <Input class="md:mt-6 mt-4" Label="Company name *"/>
              <Button class="md:mt-6 mt-4" msg="Submit"/>
            </form>
        </div>
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