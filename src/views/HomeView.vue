<template>
    <div
    :class="HomeView"
     class="home">
    <Header class="fixed"></Header>
    <Intro/>
    </div>
    <AboutUs/>
    <ContactUs/>
    <Works/>
</template>

<script>
import Button from '../components/Button.vue'
import Header from './components/Header.vue'
import AboutUs from './components/AboutUs.vue'
import Intro from './components/Intro.vue'
import ContactUs from './components/ContactUs.vue'
import Works from './components/Works.vue'



export default {
    components:{Button, Header, AboutUs, Intro, ContactUs, Works},
    
}
</script>

<style scoped>
 .home {
    background-image: url(../assets/img/expectantwoman.png);
    background-repeat: no-repeat;
    background-size: cover;
 }
</style>
