<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'CollapseItem',
  props:{
    name:{
      type:String,
      required: true
    },
    title:{
      type:String,
    }
  },
  data(){
    return {
      open:false
    }
  },
  inject:['eventBus'],
  mounted(){
    this.eventBus && this.eventBus.$on('update:selected',(names)=>{
      if(names.indexOf(this.name)>=0){
        this.open=true
      }else{
        this.open=false    
      }
    })
  },
  methods:{
    toggle (){
      if(this.open){
        this.eventBus && this.eventBus.$emit('update:removselected',this.name)
      }else{
        this.eventBus && this.eventBus.$emit('update:addselected',this.name)
      }
    },
  }
}
</script>
<style lang="less" scoped>
@grey: #ddd;
 @border-radius: 4px;
  .collapseItem {
    > .title { border: 1px solid @grey; margin-top: -1px; margin-left: -1px; margin-right: -1px;
      min-height: 32px; display: flex; align-items: center; padding: 0 8px;
      background: lighten(@grey, 8%);
    }
    &:first-child {
      > .title { border-top-left-radius: @border-radius; border-top-right-radius: @border-radius; }
    }
    &:last-child {
      > .title:last-child { border-bottom-left-radius: @border-radius; border-bottom-right-radius: @border-radius; }
    }
    > .content { padding: 8px; }
  }
</style>