<template>
    <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet">
    </head>
  <div class="header pt-7 " :class="Header">
    <div class="w-[80%] mx-auto ml-[10%] mr-[10%]  sticky z-20 top bg-white sm:py-8 py-4 rounded-lg sm:px-6 border flex justify-between ">
        <div class="logo sm:pl-0 pl-[5%]">
            <img src="../../assets/img/qweev-logo 1.png">
        </div>
        <Button class="sm:hidden flex" msg="Get Started"/>
        <i id="burger"
        @click="toggleSideBar" 
         class="text-[20px] pr-[5%] text-bold items-center ri-menu-line sm:hidden flex text-[#6750A4]"></i>

        <div id="navbar"
        :class="{'flex':showSideBar, 'hidden md:flex':!showSideBar}" 
         class="navbar sm:relative sm:bg-inherit bg-[#6750A4] sm:h-full h-[100vh] sm:flex sm:mt-0 mt-[9%] left-[400px] sm:left-0 fixed z-20 sm:translate-x-0 sm:mx-0 mx-auto sm:justify-end sm:w-full w-[250px] translate-x-[10%] sm:relative transition-all  duration-1000 ease-in-out delay-300">
         
            <nav class="">
                <ul class="sm:text-black text-white sm:mt-0 mt-6 font-semibold  sm:flex items-center sm:gap-x-4 md:gap-x-8 ">
                    <li class="hover:bg-white py-1 sm:hover:bg-transparent flex hover:text-[#6750A4] transition sm:pr-0 pr-20 ease-in-out duration-300 delay-300  sm:hover:scale-110">
                        <i class="px-3 sm:hidden font-light flex ri-home-3-line" ></i>
                        <a href="">Home</a>
                    </li>
                    <li class="flex hover:bg-white sm:hover:bg-transparent py-1 hover:text-[#6750A4] transition ease-in-out duration-300 delay-300  sm:hover:scale-110">
                        <i class="px-3 sm:hidden font-light flex ri-question-line"></i>
                        <a href="">About Us</a>
                    </li>
                    <li class="flex hover:bg-white py-1 sm:hover:bg-transparent hover:text-[#6750A4] transition ease-in-out duration-300 delay-300  sm:hover:scale-110">
                        <i class="px-3 sm:hidden font-light flex ri-settings-line"></i>
                        <a href="">How it works</a>
                    </li>
                    <li class="flex hover:bg-white py-1 sm:hover:bg-transparent hover:text-[#6750A4] transition ease-in-out duration-300 delay-300  sm:hover:scale-110">
                        <i class="px-3 sm:hidden font-light flex ri-service-line"></i>
                        <a href="">Services</a>
                    </li>
                    <li class="flex hover:bg-white py-1 sm:hover:bg-transparent hover:text-[#6750A4] transition ease-in-out duration-300 delay-300  sm:hidden flex  sm:hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 px-3 mt-1  h-4">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <a href="">Pricing</a>
                    </li>
                    <li class="flex  hover:bg-white py-1 sm:hover:bg-transparent hover:text-[#6750A4] transition ease-in-out duration-300 delay-300  sm:hover:scale-110">
                        <i class="px-3 sm:hidden font-light flex ri-phone-line"></i>
                        <a href="">Contact Us</a>
                    </li>
                    <Button class="md:flex hidden" msg="Get Started"/>
                </ul>
            </nav>
        </div>
    </div>
  </div> 
</template>

<script>
 import { remove } from '@vue/shared';
import Button from '../../components/Button.vue'
export default {
    components:{Button},
    data() {
        return{
            showSideBar :false
        }
    },
    methods:{
        toggleSideBar(){
          console.log("y")
          this.showSideBar = !this.showSideBar
        }
      }
 
}
</script>

<style>
 
</style>