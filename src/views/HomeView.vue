<template>
    <div>
        <div
        class="home">
    <Header class=""></Header>
    <Intro/>
    </div>
    <div id="about">
        <AboutUs/>
    </div>
    <div class="md:w-[70%] mx-auto mt-5 mb-3 font-ubuntu ">
        <h2>An end-to-end platform where <br>  patients can access a variety of egg donors and surrogates that possibly fits their profile. </h2>
    </div>
    <div class="w-[80%] mx-auto mt-10 mb-20">
        <CarouselImage/>
    </div>
    <div clss="pt-32" id="works">
        <h2>How it Works</h2>
        <p class="font-normal text-base lg:text-lg text-center">We understand how it is to navigate around here.<br> Let’s show your how it works in 4 easy steps.</p>
    </div>
    <div class="mt-20"  id="">
        <Works/>
    </div>
    <div  class="pt-10 clear-left mb-20">
        <h2 class="">Our Pricing Plan</h2>
        <p class="font-normal text-center text-base lg:text-lg">Our pricing plan covers for level of access to our platform</p>
    </div>
    <div id="pricing" class=" mb-20">
        <Pricing/>
    </div>
    <div id="services">
        <Services/>
    </div>
    <div class="" id="contact">
        <ContactUs/>
    </div>
    <div class="mt-auto">
        <Footer/>
    </div>
    </div>
    
</template>

<script>
import Button from '../components/Button.vue'
import Header from './components/Header.vue'
import AboutUs from './components/AboutUs.vue'
import Intro from './components/Intro.vue'
import ContactUs from './components/ContactUs.vue'
import Works from './components/Works.vue'
import CarouselImage from './components/CarouselImage.vue'
import Services from './components/Services.vue'
import Pricing from './components/Pricing.vue'
import Footer from './components/Footer.vue'



export default {
    components:{Button, Header, AboutUs, Intro, ContactUs, Works, CarouselImage, Services, Pricing, Footer},
    
}
</script>

<style scoped>
    .home {
        background-image: url(../assets/img/couplechild.jpg);
        background-repeat: no-repeat;
        text-shadow: 0px 1px 0px blueviolet;
            background-position: 0% 40%;
    }
</style>
