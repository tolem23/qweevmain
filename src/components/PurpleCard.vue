<template>
  
    <div class="container w-full max-w-[320px] p-4 bg-[#EADDFF] font-ubuntu text-[#625B71] hover:bg-[#6750A4] hover:text-white border transition  rounded-lg sm:p-8 delay-150 ease-in-out hover:translate-y-2 hover:scale-110 duration-300 ">
      <div class="mb-4 flex items-center py-6 gap-3">
        <img src="../assets/img/cardimg.png " class="p-2 bg-[#6750A4] rounded-lg" alt="" >
        <h2 class=" text-3xl font-bold hover:text-white font-ubuntu ">{{title}}</h2>
      </div>
        <div class="flex items-baseline ">
            <span class="text-5xl font-bold text-black hover:text-inherent tracking-tight">{{amount}}</span>
            <span class="ml-1 text-xl font-normal ">/access</span>
        </div>
        <!-- List -->
          <ul role="list" class="space-y-7   my-7 " >
            <li class="flex space-x-3" v-for="item in cardlist" :key="item">
                <!-- Icon -->
                <svg  class="flex-shrink-0 " xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.003 13l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"/></svg>
                <span class="text-lg font-normal leading-tight ">{{item.list}}</span>
            </li>
            
          </ul>
        <button type="button" @click="load()"  class="text-white hover:text-[#6750A4] mt-3 bg-[#6750A4] hover:bg-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-base px-5 py-5 inline-flex justify-center w-full text-center">Get Started Now</button>
    </div>

</template>

<script>
export default {
props:{
    title: {
        type:String,
        default:"Basic"
    },
    amount: {
        type:String,
        default:"#20,000"
    },
   cardlist: {
         type: Array
        
       },
   
},
 data() {
      return {
        lists: [
          {
            list: "72 hours request access",
          },
          {
            list: "3 donors booking",
          },
          {
            list: "3 donors search",
          },
        ],
  
        
      };
        },
        methods: {

           
            async load() {

                window.open('https://app.qweev.com/portal/signup');
            },

        },
}
</script>

<style >
  .container:hover{
    color: white !important
  }
</style>