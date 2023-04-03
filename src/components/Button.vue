<template>
  <div class="">
        <button
         class="border bg-[#6750A4] text-sm lg:text-base text-white px-6 py-2 rounded-lg border-[#6750A4] hover:bg-opacity-80" :class="buttonClass">
         {{ msg }}
        </button>
    </div>
</template>

<script>
export default {
props:{
    buttonClass:{
        type: String
    },
    msg:{
        type: String,
        default:"Get Started"
    },

}
}
</script>

<style>

</style>