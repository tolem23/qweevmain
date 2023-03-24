<template>
    <div>
        <div
    :class="HomeView"
        class="home">
    <Header headerClass="sticky"></Header>
    <Intro/>
    </div>
    <div>
        <AboutUs/>
    </div>
    <div class="md:w-[70%] mx-auto mt-5 mb-3 font-ubuntu">
    <h2>An end-to-end platform to meet the <br> diverse needs of your market </h2>
    </div>
    <div class="w-[80%] mx-auto mt-10 mb-20">
        <CarouselImage/>
    </div>
    <div clss="pt-32">
        <h2>How it Works</h2>
        <p class="font-normal text-base text-center">We understand how it is to navigate around here.<br> Let’s show your how it works in 4 easy steps.</p>
    </div>
    <div class="mt-20">
        <Works/>
    </div>
    <div  class="pt-10 clear-left mb-20">
        <h2 class="text-2xl">Our Pricing Plan</h2>
        <p class="font-normal text-center text-base fon-ubuntu">Our pricing plan covers for level of access to our platform</p>
    </div>
    <div class=" mb-20">
        <Pricing/>
    </div>
    <div>
        <Services/>
    </div>
    <div class="">
        <ContactUs/>
    </div>
    <div>
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
    background-image: url(../assets/img/expectantwoman.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
 }
</style>
