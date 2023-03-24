<template>
    <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet">
    </head>
  <div class="header pt-7 " :class="headerClass">
    <div class=" top md:w-[75%] bg-white w-[95%] mx-auto md:py-8  py-4  rounded-lg md:px-6  border  flex justify-between ">
        <div class="logo">
            <img src="../../assets/img/qweev-logo 1.png">
        </div>
        <Button class="md:hidden flex" msg="Get Started"/>
        <i id="burger"
        onclick="showmenu()"
         class="text-[20px] text-bold items-center ri-menu-line md:hidden flex text-[#6750A4]"></i>
        <div id="navbar"
         class="navbar md:relative fixed md:bg-inherit  bg-slate-300  md:h-full h-[100vh]  md:flex transition right-[-200px]  md:right-0 z-20">
            <nav>
                <ul class="font-semibold md:flex items-center gap-x-8">
                    <li class="hover:text-[#6750A4] transition ease-in-out duration-300 delay-300  hover:scale-110">
                        <a href="">Home</a>
                    </li>
                    <li class="hover:text-[#6750A4] transition ease-in-out duration-300 delay-300  hover:scale-110">
                        <a href="">About Us</a>
                    </li>
                    <li class="hover:text-[#6750A4] transition ease-in-out duration-300 delay-300  hover:scale-110">
                        <a href="">How it works</a>
                    </li>
                    <li class="hover:text-[#6750A4] transition ease-in-out duration-300 delay-300  hover:scale-110">
                        <a href="">Services</a>
                    </li>
                    <li class="hover:text-[#6750A4] transition ease-in-out duration-300 delay-300  hover:scale-110">
                        <a href="">Pricing</a>
                    </li>
                    <li class="hover:text-[#6750A4] transition ease-in-out duration-300 delay-300  hover:scale-110">
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
        return {
            
        }
    },
    mounted(){
    const burger = document.querySelector('#burger');
    const navbar = document.querySelector('#navbar');

    function showmenu() {
      if(navbar.style.right==="-200px" ){
        navbar.style.right = "0";
      }else{
        navbar.style.right ="-200px"
      }
      
    }

    }

}
</script>

<style>
.sticky {
    margin: 0 13%;
    position: fixed;
    background: inherit;
    background-color: #F3F7FE;
  }
</style>