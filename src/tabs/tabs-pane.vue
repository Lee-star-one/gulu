<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluTabsPane',
  inject:['eventBus'],
  data(){
    return {
      active:false
    }
  },
  props:{
    name:{
      type:String | Number,
      required:true
    },
  },
  computed:{
    classes(){
      return {
        active:this.active
      }
    }
  },
  created(){
    this.eventBus.$on('update:selected',(name)=>{
      if(name === this.name){
        this.active=true
        console.log(`tabs-pane中${this.name}被选中了`)
      }else{
        this.active=false
        console.log(`tabs-pane中${this.name}没有被选中`)
      }
    })
  }
}
</script>
<style lang="less" scoped>
  .tabs-pane{
    flex-shrink: 0;
    padding: 0 1em;
    &.active{
      // background: red;
    }
  }
</style>