<template>
    <transition name="slide">
        <div class="g-slides-item" :class="{reverse}" v-if="visible">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
    export default {
        name:"GuluSlidesItem",
        props:{
            name:{
                type:String,
                required:true
            }
        },
        data(){
            return{
                selected:undefined,
                reverse:false
            }
        },
        mounted() {
        },
        computed:{
            visible(){
                return this.selected === this.name
            }
        }
    }
</script>
<style lang="less" scoped>
    .slide-leave-active{
        transition: all 1s;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        background: #4d0000;
    }
    .slide-enter-active{
        transition: all 1s;
    }
    .slide-enter{
       transform: translateX(100%);
        opacity: 0;
    }
    .slide-enter.reverse{
        transform: translateX(-100%);
         opacity: 0;
    }
    .slide-leave-to{
        transform: translateX(-100%) scale(0.5);;
         opacity: 0;
    }
    .slide-leave-to.reverse{
        transform: translateX(100%) scale(0.5);
         opacity: 0;
    }
</style>