<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluTabsItem',
  inject:['eventBus'],
  data(){
    return{
      active:false
    }
  },
  computed:{
    classes(){
      return {
        active:this.active,
        disabled:this.disabled
      }
    }
  },
  props:{ 
    disabled:{
      type:Boolean,
      default:false
    },
    name:{
      type:String | Number,
      required:true
    }
  },
  created(){
    this.eventBus.$on('update:selected',(name)=>{
      if(name === this.name){
        this.active=true
        console.log(`我${this.name}被选中了`)
      }else{
        this.active=false
        console.log(`我${this.name}没有被选中`)
      }
    })
  },
  methods:{
    xxx(){
      if(this.disabled){return}
      console.log('click')
      this.eventBus.$emit("update:selected",this.name,this)
    }
  }
}
</script>
<style lang="less" scoped>
  
  @blue: blue;
  .tabs-item{
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
      font-weight: bold;
      color: @blue;
    }
    &.disabled{
      color: gray;
      cursor: not-allowed;
    }
  }
</style>