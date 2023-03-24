<template>
    <!-- <div 
     
        class="  ml-10 mt-20 py-10 card bg-[#EADDFF] rounded-xl w-auto md:grid-cols-3 grid">
      <h1

       class="text-5xl  w-32  h-20 ml-10 text-center flex justify-center border-[5px] rounded-full border-[#F4EFF4] bg-[#fff] border-t-[#6750A4]">
       {{ number }}
      </h1>

        <div 
            class=" col-span-2">
        
            <h1
                class="text-4xl text-[#1D192B] font-bold tracking-tight">
                {{ header }}
            </h1>

            <p
            class="mt-5 text-xl">
            {{ text }}
            </p>
        </div>
    </div> -->
    <div >
        <div class=" md:grid-cols-5 text-[#1D192B] ml-0 m-3 grid max-w-md p-4 rounded-lg shadow " :class="cardBg" >
            <h5 class="mb-2 text-3xl   p-3 font-bold w-16 tracking-tight h-16 border-[5px] rounded-full border-[#F4EFF4] bg-[#fff] text-center" :class="numberClass">{{ number}}</h5>
            <div class="col-span-4" :class="textColor">
                <h5 :class="headerColor"
                    class="text-3xl font-semibold tracking-wide" style="font-family: 'Domaine Display Narrow', sans-serif;">
                    {{ header }}
                </h5>
                <p  :class="textColor" class="font-normal  text-base leading-6 mt-3 ">{{ text }}</p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
    cardBg:{
        type: String,
    },
    numberClass:{
        type: String,
        default:" border-t-[#6750A4]"
    },
    number:{
        type: String
    },
    header: {
        type:String
    },
    text: {
        type:String
    },
    textColor: {
        type: String,
        default: "text-[#1C1B1F]"
    },
    headeColor: {
        type: String,
        default: "[text-[#1D192B]"
    }
 }
}
</script>

<style>

</style>