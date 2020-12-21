<template>
<transition name="fade">
  <div class="sider" v-if="visible">
    <slot></slot>
    <button @click="visible=false">关闭</button>
  </div>
</transition>
</template>
<script>
export default {
    name:"GuluSider",
    data(){
      return{
        visible:true
      }
    },
    methods:{
      enter: function (el, done) {
        done()
      },
      leave: function (el, done) {
        done()
      },
    }

}
</script>
<style lang="less" scoped>
  .sider{
    position: relative;
    >button{
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .fade-enter-active, .fade-leave-active {
      transition: all .5s;
    }
    .fade-enter, .fade-leave-to{
      margin-left: -150px;
    }
</style>