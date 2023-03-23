<template>
    <div class="">
          <div class="block">
            <label for=""
            class="">
                 {{ Label }}
                 </label>
                 <br>
            <input class="outline-none text-black w-[100%]  mt-2 h-[45px] border-[2px] px-2 rounded" type="text" :class="input"> 
          </div>  
    </div>
</template>

<script>
export default {
    props: {
        input : {
            type: String
        },
        Label: {
            type: String,       
        },
        text: ''

    }
}
</script>

<style>

</style>